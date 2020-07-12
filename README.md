# wxbot
简单实现了下通过机器人在微信群间同步消息的机制

# 依赖
node: >= v12

wechaty：wechaty核心库

wechaty-puppet-padplus：wechaty的ipad协议实现


# 运行

本地安装 npm i ; npm run serve

提供dockerfile，可以自行编译docker镜像

# 指令
1 咨询 ：

  @机器人 【咨询】你要咨询的内容
  
2 回复 ：

  @机器人 msgId:xxxxoooo
  
  【咨询】你要回复的内容
 
3 公告：

  @机器人 【公告】公告内容
