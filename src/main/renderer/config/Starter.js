class Starter {

  constructor() {
  }

  start() {
    const app = appStorage.restoreApp() || new App();

    const vueAppManageThings = new Vue({
      el: '#watch-app',
      data: {
        watchedApp: app
      },
      watch: {
        watchedApp: {
          handler: function () {
            appStorage.storeApp(app);
            console.info('APP CHANGED')
            projectListener.fire('app-changed');
            ipcRenderer.send('app-changed', app.toJSON());
          },
          deep: true
        }
      }
    });

    ipcRenderer.on('app-closed', appStorage.storeApp);

    ipcRenderer.on('app-area-changed', (event, area) => app.setCurrentAreaKey(area));

    ipcRenderer.on('data-loaded', (event, data) => appStorage.loadFileData(data));

    ipcRenderer.on('data-persisted', (event, persistedApp) => app.currentFile = persistedApp.currentFile);

    ipcRenderer.on('change-language', (event, code) => app.languageCode = code);

    return app;
  }
}
