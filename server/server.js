const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
//message file...
const {generateMessage} = require('./utils/message');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New User Connected");

  socket.emit('newMessage', generateMessage('Admin', 'Welcome To chat App'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('Created Message: ', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback("This is from the server");
  });

  socket.on('disconnect', () => {
    console.log("User was disconnected");
  });
});




server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
