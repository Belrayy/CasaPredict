const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 292,
    height: 430,
    resizable: true,
    fullscreenable: false,
    frame: true, 
    transparent: false,
    icon: path.join(__dirname, "assets/images/casa_predict_logo.png"),
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
