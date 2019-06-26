/** 聊天室 */
export interface IChatroom {
  name: string; // 聊天室名字（必填) Byte(0~64)
  owner_username: string; // 聊天室创建者（必填）	Byte (4~128)
  description?: string; // 聊天室描述（选填）	Byte(250)
  members_username?: string[]; // 聊天室成员列表（选填）
  ctime?: string; // 创建时间	 2017-11-27 18:38:25
  max_member_count?: number; // 最大成员数
  total_member_count?: number; // 当前总人数
  flag?: number; // 禁言标志	0表示不禁言 1表示开启禁言
  [propName: string]: any;
}

/** User对象字段总览 */
export interface IUser {
  /** 用户登录名	Byte(4~128) */
  username: string;
  /** 登录密码	Byte(4~128) */
  password: string;
  /** 用户所属于的应用的appkey */
  appkey?: string;
  /** 用户昵称	Byte(0~64) */
  nickname?: string;
  /** 生日	yyyy-MM-dd HH:mm:ss */
  birthday?: string;
  /** 性别 0 - 未知， 1 - 男 ，2 - 女*/
  gender?: number;
  /** 用户签名	Byte(0~250) */
  signature?: string;
  /** 用户所属地区	Byte(0~250) */
  region?: string;
  /** 用户详细地址	Byte(0~250) */
  address?: string;
  /** 用户创建时间	 */
  ctime?: string;

  /** 用户最后修改时间	 */
  mtime?: string;
  /** 用户自定义json对象	Byte(0~512) */
  extras?: any
}

export interface IMessage {
  /** 版本号 目前是1 （必填） */
  version: number;
  /** 发送目标类型 single - 个人，group - 群组 chatroom - 聊天室（必填） */
  target_type: string;
  /** 发送消息者的身份，可为“admin”，“user” （必填） */
  from_type: string;

  /** 目标id
   * single填username
   * group 填Group
   * id chatroom 填chatroomid（必填）
   * */
  target_id: string;
  /** 跨应用目标appkey（选填） */
  target_appkey?: string;
  /** 发送者的username （必填 */
  from_id: string;
  /** 发送者展示名（选填） */
  from_name?: string;
  /** 接受者展示名（选填） */
  target_name?: string;
  /** 消息是否离线存储 true或者false，默认为false，表示需要离线存储（选填） */
  no_offline?: boolean;
  /** 消息是否在通知栏展示 true或者false，默认为false，表示在通知栏展示（选填） */
  no_notification?: boolean;
  /** 自定义通知栏展示（选填） */
  notification?: {
    title?: string;
    alert?: string
  };
  /** 发消息类型
     * text - 文本，
     * image - 图片,
     * custom - 自定义消息（msg_body为json对象即可，服务端不做校验）
     * voice - 语音 （必填）
     * */
  msg_type: string;
  /** Json对象的消息体 限制为4096byte */
  msg_body: any;
}

interface IMessageText {
  /** 消息内容 （必填） */
  text?: string;
  /** 选填的json对象 开发者可以自定义extras里面的key value（选填） */
  extras?: any;
}

interface IMessageImage {
  /** String 文件上传之后服务器端所返回的key，用于之后生成下载的url（必填） */
  media_id: string;
  /** long 文件的crc32校验码，用于下载大图的校验 （必填） */
  media_crc32: string;
  /** int 图片原始宽度（必填） */
  width: number;
  /** int 图片原始高度（必填） */
  height: number;
  /** String 图片格式（必填） */
  format: string;
  /** String 图片hash值（可选） */
  hash?: string;
  /** int 文件大小（字节数）（必填） */
  fsize: number;
}

interface IMessageVoice {
  /** String 文件上传之后服务器端所返回的key，用于之后生成下载的url（必填） */
  media_id: string;
  /** long 文件的crc32校验码，用于下载大图的校验 （必填） */
  media_crc32: string;
  /** int 音频时长（必填） */
  duration: number;
  /** String 音频hash值（可选） */
  hash?: string;
  /** int 文件大小（字节数）（必填） */
  fsize: string;
}


/** Group 群组 对象字段总览 */
export interface IGroup {
  /** 群组名称	Byte(0~64) */
  name: string;
  /** 群组描述	Byte(0~250) */
  desc?: string;
  /** 群主的username	Byte(4-128) 必填 */
  owner_username: string;
  /** 成员 username */
  members_username: string[];
  /** 群组默认500人	 */
  MaxMemberCount?: number;
  /** 创建时间	 */
  ctime?: string;
  /** 最后修改时间	 */
  mtime?: string;
  /** 群组头像	 */
  avatar?: string;
  /** （选填） 类型 1 - 私有群（默认）2 - 公开群 不指定flag，默认为1 */
  flag?: number;
}
