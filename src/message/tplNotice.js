const config = require("../../config")
const logger = require('../logger')
const keyword = "公告"

module.exports = {
  exec: async (bot, msg) => {
    if (config.room.adminRoom.roomId != msg.room().id) {
      return
    }
    try {
      const contact =  bot.userSelf()
      let roomList = await bot.Room.findAll()
      let sendRoomList = []
      let self = await msg.to()
      self = "@" + self.name()
      // 获取消息内容，拿到整个消息文本，去掉 @+名字
      let text = msg.text().replace(self, "")
      for (let i = 0; i < roomList.length; i++) {
        let room = roomList[i];
        if (room.id == config.room.adminRoom.roomId) { //管理组不发
          continue
        }
        try {
          if (room.owner().id == contact.id) { //如果自己是管理员，发公告
            room.announce(text)
          } else {
            room.say(text)
          }
        } catch (e) {
          //有一定几率会 GET_CONTACT_SELF_INFO 会超时 ，但实际上消息已经发了，直接忽略报错
        }
        sendRoomList.push(await room.topic())
      }
      logger.info({
        id: msg.id,
        action: '公告处理',
        result: 'OK',
        message: { text, sendRoomList }
      })
      return `已受理 , 已发送至${sendRoomList.length}个群组`

    } catch (err) {
      logger.error({
        id: msg.id,
        action: '公告处理',
        result: 'ERROR',
        message: err.stack || err.message || 'unknow error'
      })
      return "受理失败"
    }
  },
  keyword
}