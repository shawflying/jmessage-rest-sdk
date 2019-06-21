import * as httplib from "./httplib"
import * as conf from "./config"
import { IMessage } from "./interfaces"
export default class SensitiveWord {

  /** user接口api */
  static api = conf.sensitiveword

  /** 添加敏感词 */
  static async create(words: string[]) {
    return await httplib.post(this.api, words)
  }
  /**
   * 修改敏感词
   * @param new_word 新敏感词
   * @param old_word 旧敏感词
   */
  static async update(new_word: string, old_word: string) {
    return await httplib.put(this.api, { new_word, old_word })
  }
  /**
   * 删除敏感词
   * @param words 
   */
  static async delete(words: string[]) {
    return await httplib.del(this.api, words)
  }
  /**
   * 获取敏感词列表
   * @param start 起始序号 从0开始
   * @param count 查询条数，最多2000
   */
  static async pagingQuery(start: number = 0, count: number = 100) {
    return await httplib.get(this.api + `?start=${start}&count=${count}`)
  }

  /**
   * 更新敏感词功能状态
   * @param status status : 敏感词开关状态， 1表示开启过滤， 0表示关闭敏感词过滤
   */
  static async setSwitchStatus(status: number = 0) {
    return await httplib.put(this.api + `status`, { status })
  }
  /**
   * 获取敏感词功能状态
   * @returns body {"status": 1} 
   */
  static async getSwitchStatus() {
    return await httplib.get(this.api + `status`)
  }
}

