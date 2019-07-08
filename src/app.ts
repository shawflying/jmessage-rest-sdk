import * as conf from './config';
/** 管理员类 */
export default class App {
  static Config(AppKey: string, MasterSecret: string) {
    conf.AppConf.AppKey = AppKey;
    conf.AppConf.MasterSecret = MasterSecret;
  }
}
