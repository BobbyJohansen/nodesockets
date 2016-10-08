/**
 * Created by Bobby on 10/8/2016.
 */
var express = require('express');
var http = require('http');
var io = require('socket.io');
var app = express()
    , server = require('http').createServer(app)
    , io = io.listen(server);

server.listen(9999, function(){
    console.log("✔ Express server listening on port %d in %s mode", 9999, app.settings.env);
});

io.sockets.on('connect', function (socket) {
    console.log('client connected. Saying Hello');
    //say hello to client we think connected
    socket.emit('handshake', { hello: 'hia' });
    //listen for handshake from client
    socket.on('handshake', function(data) { console.log('Client ack\'d handshake saying : ' + data.hello)});



    // socket.on('my-event', function (data) {
    //     console.log("my-event recieved");
    //     console.log(data);
    // });
});

//https://code.tutsplus.com/tutorials/real-time-chat-with-nodejs-socketio-and-expressjs--net-31708
