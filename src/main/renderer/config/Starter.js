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
            projectListener.fire('app-changed');
            ipcRenderer.send('app-changed', JSON.stringify(app.toJSON()));
          },
          deep: true
        }
      }
    });

    ipcRenderer.on('app-closed', appStorage.storeApp);

    ipcRenderer.on('app-area-changed', (event, area) => APP.setCurrentAreaKey(area));

    ipcRenderer.on('data-loaded', (event, data) => appStorage.loadFileData(data));

    ipcRenderer.on('data-persisted', (event, persistedApp) => {
      APP.currentFile = persistedApp.currentFile;
    });

    return app;
  }
}