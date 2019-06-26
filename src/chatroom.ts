// const conf = require("../config")
import * as httplib from './httplib';
import * as conf from './config';
import { IChatroom } from './interfaces';

/**
 * @description 聊天室维护
 * @class Chatroom
 */
export default class Chatroom {

  /** user接口api */
  static api: string = conf.chatroom;

  /**
   * 创建聊天室
   * 1. 返回聊天室id
   * @param body
   */
  static async create(body: IChatroom) {
    return await httplib.post(this.api, body);
  }

  /**
   * 更新聊天室信息
   * @param room_id
   * @param body
   */
  static async update(room_id: number, body: IChatroom) {
    return await httplib.put(this.api + room_id, body);
  }

  /**
   * 删除聊天室
   * @param room_id 聊天室id
   */
  static async delete(room_id: number) {
    return await httplib.del(this.api + room_id);
  }
  /**
   * GET 获取应用下聊天室列表
   * @param start
   * @param count
   */
  static async getAppChatroomList(start: number, count: number) {
    return await httplib.get(this.api + `?start=${start}&count=${count}`);
  }
  /**
   * @description 批量获取聊天室详情
   * @static
   * @param {number[]} roomid 聊天室id列表
   * @returns
   */
  static async getBatchChatroom(roomid: number[]) {
    return await httplib.post(this.api + `batch`, roomid);
  }
  /**
   * GET 获取用户聊天室列表
   * @param username 用户名称
   */
  static async getUsersChatroom(username: string) {
    console.log(conf.users);
    return await httplib.get(conf.users + `${username}/chatroom`);
  }

  /**
   * 获取聊天室成员列表
   * @param room_id 聊天室ID
   * @param start
   * @param count
   */
  static async getChatroomMembers(room_id: number, start: number, count: number) {
    return await httplib.get(this.api + `${room_id}/members?start=${start}&count=${count}`);
  }

  /**
   * 添加聊天室成员
   * @param room_id
   * @param body username的json数组 最多支持3000个
   */
  static async addMembers(room_id: number, body: string[]) {
    return await httplib.put(this.api + `${room_id}/members`, body);
  }

  /**
   * 修改用户禁言状态
   * @param room_id
   * @param username
   * @param status  0表示不禁言 1表示开启禁言 必填
   */
  static async forbidden(room_id: number, username: string, status: number) {
    return await httplib.put(this.api + `${room_id}/forbidden/${username}?status=${status}`);
  }
  /**
   * 移除聊天室成员
   * @param room_id 移除聊天室成员
   */
  static async removeMembers(room_id: number, body: string[]) {
    return await httplib.del(this.api + `${room_id}/members`, body);
  }
}

