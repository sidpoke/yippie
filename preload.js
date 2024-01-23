const {contextBridge, ipcMain, ipcRenderer} = require('electron')
//const fs = require('fs')
//const path = require('path')

console.log("Preload loaded");

let indexBridge = {
    keydown: (callback) => ipcRenderer.on("keydown", (callback)),
    mousedown: (callback) => ipcRenderer.on("mousedown", (callback))
}

contextBridge.exposeInMainWorld("indexBridge", indexBridge);