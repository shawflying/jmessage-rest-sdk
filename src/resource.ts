import * as httplib from "./httplib"
import * as conf from "./config"
/** 媒体文件下载与上传 */
export default class Resource {

  /** user接口api */
  static api = conf.resource
  /**
   * 文件下载
   * @param mediaId 资源的mediaId，包括用户的avatar字段
   * @returns body {"url":"http://........."}
   */
  static async download(mediaId: string) {
    return await httplib.get(this.api + `?mediaId=${mediaId}`)
  }

  /**
   * 文件上传
   * @param body 
   */
  static async upload(body: any) {
    return await httplib.post(this.api + `?type=image`, body)
  }

}

