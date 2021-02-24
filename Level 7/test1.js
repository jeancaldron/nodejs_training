// 1. Implement an EventEmitter class that will receive an event for user connection/disconnection 
// under the same listener. If the user is not connected yet it should print ‘{user} connected’, 
// if the user was previously connected it should print ‘{user} disconnected’. 
// Emit multiple events with some repeated user names to test it.
const EventEmitter = require("events");
let usersConnected = [];
class Connections extends EventEmitter { }

const connections = new Connections();

connections.on("connect/disconnect", (user) => {
    if (usersConnected.includes(user)) {        
        usersConnected.splice(usersConnected.indexOf(user), 1);
        console.log(`${user} disconnected`);
    } else {
        usersConnected.push(user);
        console.log(`${user} connected`);
    }
});

connections.emit("connect/disconnect", "Jean");
connections.emit("connect/disconnect", "Jean");
connections.emit("connect/disconnect", "Kendra");
connections.emit("connect/disconnect", "Kendra");