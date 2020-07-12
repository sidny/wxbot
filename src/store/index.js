const config = require("../config")

const STORE = {}
let store = {
  get: async key => {
    return STORE[key]
  },
  set: async (key,value) => {
    STORE[key] = value;
    return true
  }
};
if(config.redis) {
  store = require('./redis')
}

module.exports = store
