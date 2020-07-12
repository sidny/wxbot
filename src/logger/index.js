const log4js = require('log4js');
const jsonLayout = require('log4js-json-layout');
log4js.addLayout('json', jsonLayout);
const config = require('../config')

log4js.configure(config.log)

const logger = log4js.getLogger()
module.exports = logger