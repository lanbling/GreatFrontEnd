const EventEmitter = require('events');
class Person extends EventEmitter{
    constructor(){
        super();
    }
}
const lanMr = new Person();

lanMr.on('play', function(data){
    console.log(this);
    // Person {
    //     _events: [Object: null prototype] { play: [ [Function], [Function] ] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined,
    //     [Symbol(kCapture)]: false
    //   }
});

lanMr.on('play', (data) => {
    console.log('play again:', this);
});

lanMr.emit('play', 'hello nodeJs');