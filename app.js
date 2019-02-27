const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server);

const listen_port = 8080;

app.use((express.static(__dirname + '/public')));

app.get('mobile', function(req, res){
    res.sendFile(__dirname + '/public/controller.html');
});

app.get('index', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

