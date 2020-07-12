const tplQuery = require("./tplQuery")
const tplResolve = require("./tplResolve")
const tplNotice = require("./tplNotice")
const store = require("../store")
const logger = require('../logger')

const tplMap = {
  [tplQuery.keyword]: tplQuery.exec,
  [tplResolve.keyword]: tplResolve.exec,
  [tplNotice.keyword]: tplNotice.exec
}

const exec = async (bot,msg) => {
  let self = await msg.to()
  self = "@" + self.name()
  // 获取消息内容，拿到整个消息文本，去掉 @+名字
  let sendText = msg.text().replace(self, "").trim()
  let keyword = /【(.+)】/mi.exec(sendText);
  if(keyword && keyword.length == 2) {
    if(tplMap[keyword[1]]) {
      store.set("message_"+msg.id,msg,48*60)
      logger.info({
        id: msg.id,
        action: keyword[1],
        message:msg.payload
      })
      return tplMap[keyword[1]](bot,msg)
    } 
  }
  return
}
module.exports = {
 exec
}