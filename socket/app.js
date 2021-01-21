
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3001, function(){
  console.log('server is running on port 3001');
});

io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log(data);
    io.emit('new-message', { message: data });
  });
});