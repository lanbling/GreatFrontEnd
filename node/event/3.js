const EventEmitter = require('events')

class Person extends EventEmitter {
  constructor() {
    super()
  }
}
const mrNull = new Person()
mrNull.on('play', function(data) {
  console.log(data)
})

mrNull.emit('play', 'hello nodeJs')

console.log(`hello MrNull`)

/* 
先输出hello nodeJs
后输出 hello MrNull

说明这个emit的顺序是正常的
想要让它不正常怎么办
使用
setImmediate(() => {
    console.log(data)
  })

  process.nextTick(() => {
    console.log(data)
  })
这两个可以是微任务
放在宏任务后的

*/
