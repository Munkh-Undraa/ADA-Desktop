// npm i --save-dev electron 
// before starting the app

const electron = require('electron')
const { app, BrowserWindow, Menu } = electron

let mainWindow

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    mainWindow.loadFile('index.html')

    console.log("Main window created");
    mainWindow.setMenu(null)

    mainWindow.on('closed', function () {
        app.quit()
    })
}

app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})