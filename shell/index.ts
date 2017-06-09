import { app } from 'electron';

import { WindowManager } from './windowManager';

const windowManager = new WindowManager();
app.on('ready', () => windowManager.open('hello'));
