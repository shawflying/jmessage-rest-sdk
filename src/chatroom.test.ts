import Chatroom from './chatroom';
// <reference path="./interfaces.ts" />
import { IChatroom } from './interfaces';

let chatroomParams: IChatroom = {
  'chatroom_id:': '5620ae44663ff29d64d50969',
  'owner_username': 'tingo',
  'name': '5620ae44663ff29d64d50969_20190621',
  'description': '互动聊天室',
  'members_username': []
};


(async () => {
  let res = await Chatroom.create(chatroomParams);
  console.log(res);

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
