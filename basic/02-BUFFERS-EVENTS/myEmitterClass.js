const EventEmitter  = require('events');

class MyEmitter extends EventEmitter {
    sendMessage (message) {
        console.log(`Message send: ${message}`);
        this.emit('message', message);
    }

    chatError
}

const chat =  new MyEmitter();

chat.on('message', (message) => {
    console.log(`Message received: ${message}`);
})

chat.sendMessage("Hello World!")