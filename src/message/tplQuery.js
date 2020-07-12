const config = require("../../config")
const logger = require('../logger')
const util = require('util')
const keyword="咨询"
const tpl = 
`msg_id: %s
用户 %s ${keyword}:
%s`
module.exports ={
  exec:  async (bot,msg) => {
    if(config.room.adminRoom.roomId == msg.room().id) {
      return 
    }
    let adminRoom = await bot.Room.find({ id: config.room.adminRoom.roomId})
    let text = util.format(
      tpl,
      msg.id,msg.from().name(),
      msg.text().replace("@"+msg.to().name()+" 【咨询】",'')
    )
    adminRoom.say(text)
    logger.info({
      id: msg.id,
      action: '咨询处理',
      result:'OK',
      message:text
    })
    return '已受理'
  },
  keyword
}