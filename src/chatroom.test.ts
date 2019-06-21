import Chatroom from "./chatroom";
// <reference path="./interfaces.ts" />
import { IChatroom } from "./interfaces";

let chatroomParams: IChatroom = {
  "owner_username": "yanxxit",
  "name": "临时聊天室",
  "description": "聊天室测试",
  "members_username": []
};


(async () => {
  let res = await Chatroom.create(chatroomParams)
  console.log(res)

  // let list = await Chatroom.getBatchChatroom([20739012, 20739014, 18250551])
  // console.log("--->", list)

  // let res = await Chatroom.delete(18250551)
  // console.log(res)
  // let list = await Chatroom.getUsersChatroom("yanxxit")
  // // console.log(list)
  // for (const m of list) {
  //   await Chatroom.delete(m.id)
  // }

})();
