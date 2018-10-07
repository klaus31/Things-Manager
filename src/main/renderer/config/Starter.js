class Starter {

  constructor() {
  }

  start() {
    const app = appStorage.restoreApp() || new App();
    if (localStorage.getItem('tmp-language')) {
      app.languageCode = localStorage.getItem('tmp-language');
      localStorage.setItem('tmp-language', null);
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
          },
          deep: true
        }
      }
    });

    ipcRenderer.on('app-closed', appStorage.storeApp);

    ipcRenderer.on('app-area-changed', (event, area) => app.setCurrentAreaKey(area));

    ipcRenderer.on('new-project-requested', () => {
      // TODO changes gets lost ...
      localStorage.clear();
      localStorage.setItem('tmp-language', app.languageCode);
      window.location.reload();
    });

    ipcRenderer.on('data-loaded', (event, data) => appStorage.loadFileData(data));

    ipcRenderer.on('data-persisted', (event, persistedApp) => app.currentFile = persistedApp.currentFile);

    ipcRenderer.on('change-language', (event, code) => app.languageCode = code);

    return app;
  }
}
