class Starter {

  constructor() {
  }

  start() {
    const meStarter = this;
    const app = appStorage.restoreApp() || new App();
    if (localStorage.getItem('tmp-language')) {
      app.languageCode = localStorage.getItem('tmp-language');
      localStorage.removeItem('tmp-language');
    }

    const vueAppManageThings = new Vue({
      el: '#watch-app',
      data: {
        watchedApp: app
      },
      watch: {
        watchedApp: {
          handler: function () {
            appStorage.storeApp(app);
            projectListener.fire('app-changed');
            ipcRenderer.send('app-changed', app.toJSON());
            if (!app.changesMade) {
              app.changesMade = meStarter._originalHashCodeOfApp !== JSON.stringify(app.toJSON()).hashCode();
            }
          },
          deep: true
        }
      }
    });

    ipcRenderer.on('app-closed', appStorage.storeApp);

    ipcRenderer.on('app-area-changed', (event, area) => app.setCurrentAreaKey(area));

    ipcRenderer.on('new-project-requested', () => {
      const confirmed = !app.changesMade || window.confirm(ml.get('0+Jhdv38B5t0u8zb'));
      if (confirmed) {
        localStorage.clear();
        localStorage.setItem('tmp-language', app.languageCode);
        localStorage.removeItem('originalHashCodeOfApp');
        window.location.reload();
      }
    });

    ipcRenderer.on('data-loaded', (event, data) => appStorage.loadFileData(data));

    ipcRenderer.on('data-persisted', (event, persistedApp) => {
      app.currentFile = persistedApp.currentFile;
      meStarter._originalHashCodeOfApp = JSON.stringify(app.toJSON()).hashCode();
      localStorage.setItem('originalHashCodeOfApp', meStarter._originalHashCodeOfApp);
      app.changesMade = false;
    });

    ipcRenderer.on('change-language', (event, code) => app.languageCode = code);

    this._originalHashCodeOfApp = localStorage.getItem('originalHashCodeOfApp') || JSON.stringify(app.toJSON()).hashCode();
    localStorage.setItem('originalHashCodeOfApp', this._originalHashCodeOfApp);

    return app;
  }
}
