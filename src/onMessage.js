/*
 * @Author: isboyjc
 * @Date: 2020-02-18 16:31:25
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-03-01 02:16:17
 * @Description: 消息监听回调
 */
const { Message } = require("wechaty")

// 消息处理入口
const msgProcess = require("./message") 


// 消息监听回调
module.exports = bot => {
  return async function onMessage(msg) {
    // 判断消息来自自己，直接return
    if (msg.self()) return

    // console.log("=============================")
    // console.log(`msg : ${msg}`)
    // console.log(
    //   `from: ${msg.from() ? msg.from().name() : null}: ${
    //     msg.from() ? msg.from().id : null
    //   }`
    // )
    // console.log(`to: ${msg.to()}`)
    // console.log(`text: ${msg.text()}`)
    // console.log(`isRoom: ${msg.room()} ${msg.room()?msg.room().id:''}`)
    // console.log("=============================")
    
    // 判断此消息类型是否为文本
    if (msg.type() == Message.Type.Text) {
      // 判断消息类型来自群聊
      if (msg.room()) {
        // 获取群聊
        const room = await msg.room()

        // 收到消息，提到自己
        if (await msg.mentionSelf()) {

          // 请求机器人接口回复
          let res = await msgProcess.exec(bot,msg)

          // 如果有返回消息，@来自人
          if(res) {
            room.say(res, msg.from())
          }
          return
        }
      }
    //} else {
    //  //非文本消息不处理
    //  console.log("消息不是文本！")
    }
  }
}
