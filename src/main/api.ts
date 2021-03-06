import exitHook from 'exit-hook';
import spwan from 'cross-spawn';
import { ipcMain } from 'electron-better-ipc';
import logger from 'electron-log';

import { BoardcastManager } from './boradcast-manager';
import { setSystemProxy } from './platform';
import checkInstallStatus from './install';
import treeKill from 'tree-kill';
import ip from 'ip';
import { checkUpdater } from './updater';
import Koa from 'koa';
import KoaStatic from 'koa-static';
import electronIsDev from 'electron-is-dev';
import path from 'path';

interface SwpanModuleProp {
    moduleId: string;
    env: any;
    keepAlive: boolean;
}
async function checkInstall() {
    await checkInstallStatus();
}
async function spawnModule(props: any) {
    const { moduleId, env = {} } = props as SwpanModuleProp;
    logger.info('spawn module', moduleId);
    const boardcastPort = (await BoardcastManager.getInstance()).getPort();

    logger.info('boardcast port', boardcastPort);

    // fix electron crash with --inspect
    const argv = process.argv.slice(1).filter(item => !item.startsWith('--inspect'));

    const startProcess = () => {
        const child = spwan(process.execPath, argv, {
            env: {
                ...process.env,
                ...env,
                ELECTRON_RUN_MODULE: moduleId,
                LIGHTPROXY_BOARDCASR_PORT: boardcastPort,
            },
        });
        logger.info('Spwaned process', process.execPath, child.pid);

        exitHook(() => {
            child.kill();
        });

        child?.stderr?.on('data', data => {
            logger.error(`[pid ${child.pid}]stderr: ${data.toString()}`);
        });

        child?.stdout?.on('data', data => {
            logger.info(`[pid ${child.pid}]stdout: ${data.toString()}`);
        });

        return child.pid;
    };

    return startProcess();
}

async function getBoradcastPort() {
    const instance = await BoardcastManager.getInstance();
    return instance.getPort();
}

async function treeKillProcess(pid: any) {
    treeKill(pid);
}

async function getIp() {
    return ip.address();
}

async function update() {
    return checkUpdater();
}

let server: any;

async function getStaticServePath() {
    if (!server) {
        const app = new Koa();
        app.use(KoaStatic(electronIsDev ? path.join(__dirname, '../../') : path.join(__dirname, './')));
        server = app.listen();
    }
    // @ts-ignore
    const port = server.address()?.port;
    return `http://127.0.0.1:${port}`;
}

export async function initIPC() {
    // ipcMain
    ipcMain.answerRenderer('spawnModule', spawnModule);
    ipcMain.answerRenderer('checkInstall', checkInstall);

    ipcMain.answerRenderer('getBoradcastPort', getBoradcastPort);
    // @ts-ignore
    ipcMain.answerRenderer('setSystemProxy', setSystemProxy);

    ipcMain.answerRenderer('treeKillProcess', treeKillProcess);

    ipcMain.answerRenderer('getIp', getIp);
    ipcMain.answerRenderer('update', update);
    ipcMain.answerRenderer('getStaticServePath', getStaticServePath);

    // start a socketIO server for extension background process
    await BoardcastManager.getInstance();

    exitHook(async () => {
        await setSystemProxy(0);
    });
}
