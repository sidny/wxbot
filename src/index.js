
const { Wechaty,MemoryCard } = require("wechaty") // Wechaty核心包
const { PuppetPadplus } = require("wechaty-puppet-padplus") // padplus协议包
const config = require("./config") // 配置文件

const onScan = require("./onScan") // 机器人需要扫描二维码时监听回调
const onMessage = require("./onMessage") // 消息监听回调

// 初始化
const bot = new Wechaty({
  memory: new MemoryCard({ name : config.memorypath }), //定义memcard路径
  puppet: new PuppetPadplus({
    token: config.token
  }),
  name: config.name
})

bot
  .on("scan", onScan) // 机器人需要扫描二维码时监听
  .on("message", onMessage(bot)) // 消息监听
  .start()
