import * as httplib from './httplib';
import * as conf from './config';
import { IMessage } from './interfaces';
export default class Sdkregister {

  /** 配置 */
  static api: string = conf.sdkregister;

  /**
   * 设置SDK-API用户注册开关
   * 打开或者关闭SDK-API用户注册。
   * @param status 0为关闭，不提供SDK-API 注册功能，1为开启
   */
  static async setSwitchStatus(status: number) {
    return await httplib.put(this.api + 'status', { status });
  }
  /**
   * 获得SDK-API用户注册开关
   * @returns body {"status": 0}
   */
  static async getSwitchStatus() {
    return await httplib.get(this.api + 'status');
  }

}

