import * as httplib from "./httplib"
import * as conf from "./config"
import { IUser } from "./interfaces"
/** 用户类 */
export default class User {

  /** api */
  static api = conf.users
  static apiv2 = conf.users_v2

  /**
   * @description 创建用户,支持多用户同时创建
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {*} [body=[]]
   * @returns
   * @memberof User
   */
  static async create(body: string[]) {
    return await httplib.post(this.api, body)
  }
  /**
   * @description更新用户信息
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {*} username 用户名（唯一id）
   * @param {*} body
   * @returns
   * @memberof User
   */
  static async update(username: string, body: IUser) {
    return await httplib.put(this.api + username, body)
  }
  /**
   * @description修改密码
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {string} username用户名（唯一id）
   * @param {*} body{"new_password": "（必填）新密码" }
   * @returns
   * @memberof User
   */
  static async updatePassword(username: string, body: IUser) {
    return await httplib.put(this.api + `${username}/password`, body)
  }
  /**
   * @description删除用户
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {string} username用户名（唯一id）
   * @returns
   * @memberof User
   */
  static async delete(username: string) {
    return await httplib.del(this.api + username)
  }
  /**
   * @description批量删除用户
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {string} usernames 删除用户列表
   * @returns
   * @memberof User
   */
  static async deleteMore(usernames: string[]) {
    return await httplib.del(this.api, usernames)
  }

  /**
   * @description添加黑名单
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {*} username
   * @returns
   * @memberof User
   */
  static async blacklistAdd(username: string) {
    return await httplib.put(this.api + `${username}/blacklist`)
  }
  /** 移除黑名单 */
  static async blacklistDel(username: string) {
    return await httplib.del(this.api + `${username}/blacklist`)
  }
  static async blacklist(username: string) {
    return await httplib.get(this.api + `${username}/blacklist`)
  }


  /**
   * @description 获取用户信息
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {*} username 用户名（唯一id）
   * @returns
   * @memberof User
   */
  static async query(username: string) {
    return await httplib.get(this.api + username)
  }

  /** 获取用户列表 */
  static async list(start: number = 0, count: number = 10) {
    return await httplib.get(this.api + `?start=${start}&count=${count}`)
  }

  /** 免打扰设置 */
  static async nodisturb(username: string, body: IUser) {
    return await httplib.post(this.api + `${username}/nodisturb`, body)
  }
  /** 禁用用户 */
  static async forbidden(username: string, disable: number) {
    return await httplib.put(this.api + `${username}/nodisturb?disable=${disable}`)
  }

  /**
   * @description用户在线状态查询
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {*} username用户名（唯一id）
   * @returns{
    "login": true,
    "online": false
}
   * @memberof User
   */
  static async queryUserStat(username: string) {
    return await httplib.get(this.api + `${username}/userstat`)
  }
  /**
   * @description批量用户在线状态查询
   * @author yanxxit
   * @date 2019-06-14
   * @static
   * @param {*} usernames多个用户username列表
   * @returns
   * @memberof User
   */
  static async queryMoreUserStatV1(usernames: string[]) {
    return await httplib.post(this.api + `userstat`, usernames)
  }
  static async queryMoreUserStatV2(usernames: string[]) {
    return await httplib.post(this.apiv2 + `userstat`, usernames)
  }

}

