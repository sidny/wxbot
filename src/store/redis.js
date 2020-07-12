const redis = require('redis')
const { promisify } = require("util");
const config = require("../config")

const client = redis.createClient(config.redis)
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
//const expireAsync = promisify(client.expire).bind(client);

const MOD = {
  EX:"EX", // seconds -- Set the specified expire time, in seconds.
  PX:"PX", // milliseconds -- Set the specified expire time, in milliseconds.
  NX:"NX", // -- Only set the key if it does not already exist.
  XX:"XX", // -- Only set the key if it already exist.
  KEEPTTL:"KEEPTTL"
}

module.exports = {
  set : async (key,value,ttl = 1*60) => {
    return setAsync(key,JSON.stringify(value) ,MOD.EX,ttl)
  },
  get : async (key) => {
    let value = await getAsync(key)
    return JSON.parse(value)
  } 
}