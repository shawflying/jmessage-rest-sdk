export * from './admin';
export * from './chatroom';
export * from './message';
export * from './group';
export * from './resource';
export * from './sdkregister';
export * from './sensitiveword';
export * from './user';

import Admin from './admin';
import Chatroom from './chatroom';
import Message from './message';
import Group from './group';
import Resource from './resource';
import Sdkregister from './sdkregister';
import Sensitiveword from './sensitiveword';
import User from './user';
import * as httplib from './httplib';


export default (AppKey: string, MasterSecret: string) => {
  httplib.setAuthorization(AppKey, MasterSecret)
  return {
    Admin, Chatroom, Message, Group, Resource, Sdkregister, Sensitiveword, User
  }
};
