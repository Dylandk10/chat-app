var socket = io();

socket.on('connect', function() {
  console.log("Connected to server...");
});

socket.on('disconnect', function() {
  console.log("Disconnected from Server...");
});

socket.on('newMessage', function(message) {
  console.log("New message ", message);
});

socket.emit('createMessage', {
  from: 'fank',
  text: "heyyyyy"
}, function(data) {
  console.log("Got it", data);
});

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function() {

  });
});
