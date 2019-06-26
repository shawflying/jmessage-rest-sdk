import * as httplib from './httplib';
import * as conf from './config';
import { IGroup } from './interfaces';
export default class Group {

  /** user接口api */
  static api: string = conf.groups;

  /** 创建用户 */
  static async create(body: IGroup) {
    return await httplib.post(this.api, body);
  }
  static async update(username: string, body: IGroup) {
    return await httplib.put(this.api + username, body);
  }
  static async delete(username: string) { }
  static async query(username: string) {
    return await httplib.get(this.api + username);
  }
}
