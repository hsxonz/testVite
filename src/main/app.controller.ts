import { Controller, IpcHandle, IpcSend } from 'einf'
import { BrowserWindow } from 'electron'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
  ) { }

  @IpcSend('reply-msg')
  public replyMsg(msg: string) {
    return `${this.appService.getDelayTime()} seconds later, the main process replies to your message: ${msg}`
  }

  @IpcHandle('send-msg')
  public async handleSendMsg(msg: string): Promise<string> {
    const win = new BrowserWindow({ width: 1200, height: 800 })
    win.loadURL('http://127.0.0.1:5173')
    return `The main process received your message: ${msg}`
  }

  @IpcHandle('reply-icp')
  public async replyIcp(msg: string) {
    // eslint-disable-next-line no-console
    console.log(msg, 'icp')
    return `${this.appService.getDelayTime()} seconds later, the main process replies to your message: ${msg}`
  }
}
