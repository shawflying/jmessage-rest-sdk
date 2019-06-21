import Message from "./message";
// <reference path="./interfaces.ts" />
import { IMessage } from "./interfaces";

let messageText: IMessage = {
  version: 1,
  target_type: "chatroom",
  from_type: "admin",
  msg_type: "text",
  target_id: "18225905",
  from_id: "tingo",
  from_name: "aaaaaaadmin",
  target_name: "target_name",
  notification: { title: "标题", alert: "内容" },
  msg_body: { text: "hello world " }
};
/** 返回的都是文本 */
let messageImage: IMessage = {
  version: 1,
  target_type: "chatroom",
  from_type: "admin",
  msg_type: "text",
  target_id: "18225905",
  from_id: "tingo",
  from_name: "aaaaaaadmin",
  target_name: "target_name",
  notification: { title: "标题111", alert: "内容" },
  msg_body: {
    text: "这是一个图片2 ", extras: {
      image: "http://pic01.du-nang.com/images/c12cdd7f-6225-4877-918b-4ea9ec361576.jpeg",
      title: "这是一个配饮"
    }
  }
};

//接口响应比较慢
(async () => {
  messageImage.notification.alert = messageImage.notification.alert + "_" + Date.now()
  let data = await Message.send(messageImage)
  console.log(data)

  // await Message.retract("tingo", data.msg_id)
})();
