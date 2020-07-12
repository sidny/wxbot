
const Qrterminal = require("qrcode-terminal")

module.exports = function onScan(qrcode, status) {
  console.log({qrcode}); //输出二维码内容，在rancher等paas系统的日志页面中，因为字体问题二维码无法扫描，需要草料
  Qrterminal.generate(qrcode, { small: true })
}
