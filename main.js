const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('node:path')
'use strict';
const { uIOhook } = require('uiohook-napi');

function createWindow() {
    const mainScreen = electron.screen.getPrimaryDisplay();

    mainWindow = new BrowserWindow({
        width: mainScreen.size.width,
        height: mainScreen.size.height,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        skipTaskbar: false,
        webPreferences: {
          contextIsolation: true,
          preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.setFocusable(false);

    mainWindow.loadFile('index.html');

    uIOhook.on('keydown', event => {
      console.log(event); // { type: 'mousemove', x: 700, y: 400 }
      mainWindow.webContents.send('keydown', event);
    });

    uIOhook.on('mousedown', event => {
      console.log(event); // { type: 'mousemove', x: 700, y: 400 }
      mainWindow.webContents.send('mousedown', event);
    });

    // Register and start hook
    uIOhook.start();
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })