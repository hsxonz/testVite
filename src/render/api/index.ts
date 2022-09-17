import { ipcInstance } from '@render/plugins'

export function sendMsgToMainProcess(msg: string) {
  return ipcInstance.send<string>('send-msg', msg)
}

export function sendMsgToIcp(msg: string) {
  return ipcInstance.send<string>('reply-icp', msg)
}
