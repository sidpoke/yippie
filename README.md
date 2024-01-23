# yippie
An electron.js app that spawns confetti on your screen as you type or click.

Usage on your own risk. Does not destroy system files. 
To quit, end "electron-congrats" task with taskmgr or reboot.

This project needs to be compiled by yourself, i will not provide executables.
Use NPM to build the app. You might additionally need CMake or Python for some Node modules.

## Big Thanks goes out to these modules:
**tsparticles/tsparticles**
confetti particles, javascript/html particle engine

**SnosMe/uiohook-napi**
input listener to shoot confetti when app is out of focus

**rabbit-hole-syndrome/electron-forge-maker-portable**
packaging the app into a single executable file for Windows
