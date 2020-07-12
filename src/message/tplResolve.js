const store = require('../store')
const logger = require('../logger')
const config = require("../config")

const keyword = "回复"
const regMsgid = /msg_id:\s?(.+)\n/i
const regContent = /【回复】(.+)/mi

module.exports ={
  exec: async (bot,msg) => {
    if(config.room.adminRoom.roomId != msg.room().id) {
      return 
    }
    let oMsgid = regMsgid.exec(msg.text())
    if(oMsgid && oMsgid.length == 2) oMsgid = oMsgid[1]
    
    let oMsg = await store.get("message_"+oMsgid)
    let text = regContent.exec(msg.text())[1]
    let room = await bot.Room.find({id: oMsg.payload.roomId})
    let from = await bot.Contact.load(oMsg.payload.fromId)

    room.say(text,from)
    logger.info({
      id: msg.id,
      action: '回复处理',
      oMsgid,
      result:'OK',
      mssage:text
    })
    return
  },
  keyword
}