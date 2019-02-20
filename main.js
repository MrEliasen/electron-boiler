// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname);
}

// disbale autoplay policy enforced by chrome
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

/**
 * Create the new app window
 */
function createAppWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        webPreferences: {
            allowRunningInsecureContent: false,
            experimentalFeatures: false,
            allowpopups: false,
        },
        width: 1600,
        height: 900,
        icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    });

    // Emitted when the window is closed.
    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    if (process.env.NODE_ENV === 'development') {
        const username = process.env.USERNAME || process.env.USER || process.env.LOGNAME;
        const chromeExtDir = `/Users/${username}/Library/Application\ Support/Google/Chrome/Default/Extensions/`;
        const reactDevToolsPath = `${chromeExtDir}/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0`;
        const reduxDevToolsPath = `${chromeExtDir}/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0`;

        BrowserWindow.addDevToolsExtension(reactDevToolsPath);
        BrowserWindow.addDevToolsExtension(reduxDevToolsPath);

        // Open the DevTools.
        mainWindow.webContents.openDevTools();
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createAppWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    app.quit();
});
