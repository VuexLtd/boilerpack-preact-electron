import { BrowserWindow } from 'electron';

export class WindowManager {
    private windows = new Set<Electron.BrowserWindow>();

    public open(entry: string, options: Electron.BrowserWindowConstructorOptions = {}): Electron.BrowserWindow {
        const window = new BrowserWindow({
            ...options,
        });

        window.loadURL(`http://localhost:8080/?module=${entry}`);
        window.webContents.openDevTools();

        window.on('closed', () => this.windows.delete(window));

        this.windows.add(window);
        return window;
    }
}
