import redis from 'redis'
import { cli } from 'webpack';
import { promisifyAll } from 'bluebird';

const options = {
    host: '127.0.0.1',
    port: 15001,
    password: '123456',
    detect_buffers: true,
    retry_strategy: function(options) {
        if (options.error && options.error.code === "ECONNREFUSED") {
          // End reconnecting on a specific error and flush all commands with
          // a individual error
          return new Error("The server refused the connection");
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
          // End reconnecting after a specific timeout and flush all commands
          // with a individual error
          return new Error("Retry time exhausted");
        }
        if (options.attempt > 10) {
          // End reconnecting with built in error
          return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
    },
}

// const client = redis.createClient(options);
const client = promisifyAll(redis.createClient(options));
// const setValue = (key,value) => {
//     return client.set(key, value);
// }

// const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);

// const getValue = key => {
//     return getAsync(key)
// }

const setValue = (key, value) => {
    if(typeof value === 'undefined' || value == null || value == ''){
        return
    }
    if(typeof value === 'string'){
        client.set(key, value);
    }else if(typeof value === 'object'){
        Object.keys(value).forEach(item => {
            client.hset(key, item, value[item], redis.print);
        });
    }
}

// const getHValue = key => {
//     return promisify(client.hgetall).bind(client)(key)
// }

const getValue = key => {
    return client.getAsync(key);
}

const getHValue = key => {
    return client.hgetallAsync(key);
}

export {
    setValue,
    getValue,
    getHValue
}