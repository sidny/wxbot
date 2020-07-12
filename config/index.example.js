
module.exports = {
  appName: 'wechaty-bot',
  memorypath: 'config/robot',//memcard路径
  log: require('./log4js'),
  //是否使用redis作为message的临时存储，如果不配置，则使用js全局内存，需要更新store维护逻辑
  // redis: { 
  //   host: '1.2.3.4',
  //   port: '6379',
  //   prefix: 'wechaty_'
  // },
  // puppet_padplus Token
  token: "你的puppet_padplus Token",
  // 机器人名字
  name: "测试机器人",
  // 房间/群聊
  room: {
    adminRoom: { //管理群组
      name: "你的管理群组",
      roomId: "你的管理群组id ，如 1234@chatroom",
    },
  }
}
