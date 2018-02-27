import { app, BrowserWindow } from 'electron'
import reload from 'electron-reload'
import path from 'path'
import url from 'url'

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow
  mainWindow.maximize()

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', createWindow)


app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
