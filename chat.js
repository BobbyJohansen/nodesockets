/**
 * Created by Bobby on 10/8/2016.
 */

var io = require('socket.io-client');
var socket = io('http://localhost:9999');

socket.on('connect', function(){ console.log("Yay connected to server")});
socket.on('disconnect', function(){console.log("Server disconnected us. Attempting reconnect...")});

//listen for handshake from server
socket.on('handshake', function(data) {
    //send handshake back saying hi
    console.log('handshake received: ' + data.hello + ' from server.');
    socket.emit('handshake', { hello: data.hello + ' back'});
});

socket.on('client-msg', function(data){console.log("yay event happend")});

// socket.emit('my-event', { hello: 'event mf' });
// socket.emit('my-event', { hello: 'event mf' });
// socket.emit('my-events', { hello: 'event mf' });
// socket.emit('my-events', { hello: 'event mf' });
