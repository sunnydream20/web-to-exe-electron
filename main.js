const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        // fullscreen: true,
        width: 1400,
        height: 800,
        webPreferences: {
            nodeIntegration: true, // Enable Node.js integration
            contextIsolation: false // For simplicity (better to enable for production)
        }
    });

    win.loadFile('index.html'); // Load the index.html file
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});