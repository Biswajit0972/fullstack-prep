const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// .on used listen event.
myEmitter.on('greet', (data) => {
    console.log(`${data} an event occurred!`);
});

myEmitter.once('message', (data) => {
    console.log(`${data} an event occurred!`);
})

//. emit trigger event
myEmitter.emit('greet', "Ronis Space");
myEmitter.emit('greet', "Roni");
myEmitter.emit('greet', "Madam ji");


// Once removeListener event, event listener can't take it.