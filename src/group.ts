import * as httplib from "./httplib"
import * as conf from "./config"
import { IGroup } from "./interfaces"
export default class Group {

  /** user接口api */
  static api = conf.groups

  /** 创建用户 */
  static async create(body) {
    return await httplib.post(this.api, body)
  }
  static async update(username, body) {
    return await httplib.put(this.api + username, body)
  }
  static async delete(username) { }
  static async query(username) {
    return await httplib.get(this.api + username)
  }
}
