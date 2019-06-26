import * as httplib from "./httplib"
import * as conf from "./config"
import { IChatroom } from "./interfaces"
/** 管理员类 */
export default class Admin {

  /** user接口api */
  static api = conf.admins

  /** 注册管理员 */
  static async create(body: any) {
    return await httplib.post(this.api, body)
  }
  static async update(username: string, body: any) {
    return await httplib.put(this.api + username, body)
  }
  static async delete(username: string) { }
  static async query(username: string) {
    return await httplib.get(this.api + username)
  }
  /**
   * @description 获取应用管理员列表
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {number} [start=0] 起始记录位置 从0开始
   * @param {number} [count=10] 查询条数 最多支持500条
   * @returns {
    "total": 1233,
    "start": 1100,
    "count": 3,
    "users": [{
            "username": "cai",
            "nickname": "hello",
            "mtime": "2015-01-01 00:00:00",
            "ctime": "2015-01-01 00:00:00"
        },
        {
            "username": "yi",
            "nickname": "hello",
            "mtime": "2015-01-01 00:00:00",
            "ctime": "2015-01-01 00:00:00"
        },
        {
            "username": "huang",
            "nickname": "hello",
            "mtime": "2015-01-01 00:00:00",
            "ctime": "2015-01-01 00:00:00"
        }
    ]
}
   * @memberof Admin
   */
  static async getAdminsListByAppkey(start: number = 0, count: number = 10) {
    return await httplib.get(this.api + `?start=${start}&count=${count}`)
  }
}
