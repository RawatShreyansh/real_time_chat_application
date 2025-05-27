const io = require('socket.io')(5000);

const users = {};

io.on('connection',Socket => {
    Socket.io('new-user-joined',userName => {
        console.log('new-user',userName);
        users[Socket.id] = userName;
        Socket.broadcast.emit('user-joined',userName);
    })
    
    Socket.on('send',message => {
        Socket.broadcast.emit('receive',{message:message, userName:users[Socket.id]});
    });
});