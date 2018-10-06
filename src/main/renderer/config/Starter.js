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
            ipcRenderer.send('app-changed', app);
          },
          deep: true
        }
      }
    });

    ipcRenderer.on('app-closed', appStorage.storeApp);

    ipcRenderer.on('app-area-changed', (event, area) => app.setCurrentAreaKey(area));

    ipcRenderer.on('data-loaded', (event, data) => appStorage.loadFileData(data));

    ipcRenderer.on('data-persisted', (event, persistedApp) => {
      app.currentFile = persistedApp.currentFile;
      appStorage.storeApp(app);
      projectListener.fire('app-changed');
    });

    return app;
  }
}