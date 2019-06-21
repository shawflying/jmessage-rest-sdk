const baseUrl: string = "https://api.im.jpush.cn";

export const AppKey: string = "25f82c57279fd337f44ecaed";
export const MasterSecret: string = "a56b5bde9c689a32bc343e5b";
/** 用户 */
export const users: string = baseUrl + '/v1/users/';
export const users_v2: string = baseUrl + '/v2/users/';
export const admins: string = baseUrl + '/v1/admins/';
/** 消息 */
export const messages: string = baseUrl + '/v1/messages/';
/** 群组 */
export const groups: string = baseUrl + '/v1/groups/';
/** 聊天室 */
export const chatroom: string = baseUrl + '/v1/chatroom/';
/** 黑名单 */
export const sensitiveword: string = baseUrl + '/v1/sensitiveword/';
/** 资源文件 */
export const resource: string = baseUrl + '/v1/resource/';
/** 配置 */
export const sdkregister: string = baseUrl + '/v1/sdkregister/';
