
module.exports = {
  appName: 'wechaty-bot',
  memorypath: 'config/robot',//memcard路径
  log: require('./log4js'),
  redis: { //是否使用redis作为message的临时存储，如果不配置，则使用js全局内存，需要更新store维护逻辑
    host: '10.8.8.97',
    port: '6379',
    password: 'Aspire@dis',
    prefix: 'wechaty_'
  },
  // puppet_padplus Token
  token: "puppet_padplus_402d25b2efe05e79",
  // 机器人名字
  name: "测试机器人",
  // 房间/群聊
  room: {
    adminRoom: { //管理群组
      name: "微信转工单",
      roomId: "22808783294@chatroom",
    },
  }
}
