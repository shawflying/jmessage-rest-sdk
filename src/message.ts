import * as httplib from './httplib';
import * as conf from './config';
import { IMessage } from './interfaces';
/** 消息类 */
export default class Message {

  /** user接口api */
  static api: string = conf.messages;

  /**
   * 发送消息
   * @param body
   */
  static async send(body: IMessage) {
    return await httplib.post(this.api, body);
  }
  /**
   * 消息撤回
   * @param username username发送此msg的用户名
   * @param msgid msgid消息msgid
   */
  static async retract(username: string, msgid: number) {
    return await httplib.post(this.api + `${username}/${msgid}/retract`);
  }
  static async update(username: string, body: IMessage) {
    return await httplib.put(this.api + username, body);
  }
  static async delete(username: string) { }
  static async query(username: string) {
    return await httplib.get(this.api + username);
  }
}

