const EventEmitter = require('events');

class ChatRoom extends  EventEmitter {
    constructor() {
        super();
        this.activeUser = new Set();
    }

    isUserActive(userId) {
        return this.activeUser.has(userId);
    }

    joinRoom(userId) {
        if (this.isUserActive(userId)) {
            console.log("User already active")
            this.emit("userExists", userId);
            return;
        }

        this.activeUser.add(userId);
        this.emit("userJoined", userId);
    }

    sendMessage(userId,message) {
        if (!this.isUserActive(userId)) {
            this.emit("userNotActive", userId);
            return;
        }

        this.emit("message", userId, message);
    }

    leave(userId) {
        if (!this.isUserActive(userId)) {
            this.emit("userNotActive", userId);
            return;
        }

        this.activeUser.delete(userId);
        this.emit("userLeave", userId);
    }
}

const chatRoom = new  ChatRoom();

chatRoom.on('userJoined', (user) => {
    console.log(`${user} joined`)
});

chatRoom.on('userNotActive', (userId) => {
    console.log(`${userId} not active`);
});

chatRoom.on('userLeave', (userId) => {
    console.log(`${userId} leave`);
});

chatRoom.on('message', (userId,message) => {
    console.log(`Message received by ${userId}: ${message}`);
});


chatRoom.joinRoom("Roni");
chatRoom.joinRoom("Biswajit");

chatRoom.sendMessage("Roni", "Hello World!")
chatRoom.sendMessage("Biswajit", "Holly World!")

chatRoom.leave("Roni")
chatRoom.sendMessage("Roni", "Hello World!")