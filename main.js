const {
    app,
    BrowserWindow,
    ipcMain,
    shell
} = require("electron");

const path = require("path");
const url = require("url");

let win;

let createWindow = ()=>{

    win1 = new BrowserWindow({show:false});

    win1.loadURL(url.format({
        pathname:path.join(__dirname,"views/index.html"),
        protocol:"file",
        slashes:true
    }));

    win1.on("ready-to-show",()=>{
        win1.maximize();
        win1.show();
    });

    win1.on("closed",()=>{
        win1=null;
    });

}

ipcMain.on("linker",(e,arg)=>{
    console.log("Event triggered")
    shell.openExternal(arg);
});


app.on("ready",createWindow);

app.on("window-all-closed",()=>{
    if(process.platform !== "darwin")
        app.quit();
});

app.on("activate",()=>{
    createWindow();
});