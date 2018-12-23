var app = require('express')();
var http = require('http').Server(app);
 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
 
http.listen(3000, function(){
  console.log('HTTP server started on port 3000');
});

var io = require('socket.io')(http);
 
io.on('connection', function(socket){
    console.log('Client connection received');
});