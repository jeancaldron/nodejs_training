// 2. Make the first implementation use two different events for connection and disconnection and repeat the test.
const EventEmitter = require("events");
let usersConnected = [];
class Connections extends EventEmitter { }

const connections = new Connections();

connections.on("connect", (user) => {
    if (usersConnected.includes(user)) {        
        console.log(`${user} is already connected`);
    } else {
        usersConnected.push(user);
        console.log(`${user} connected`);
    }
});

connections.on("disconnect", (user) => {
    if (usersConnected.includes(user)) {        
        usersConnected.splice(usersConnected.indexOf(user), 1);
        console.log(`${user} disconnected`);
    } else {
        console.log(`${user} is already disconnected`);
    }
});

connections.emit("connect", "Jean");
connections.emit("connect", "Jean");
connections.emit("disconnect", "Jean");
connections.emit("connect", "Kendra");
connections.emit("disconnect", "Kendra");
connections.emit("disconnect", "Jean");