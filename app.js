var http= require('http');
var event=require('events');

var eventEmmiter=new event.EventEmitter()


var server=http.createServer(function(req,resp){
    eventEmmiter.emit('Request','Name');
    resp.end('Server Works');
});



eventEmmiter.on('Request',function(data){
    console.log("Request has been made",data);
});

server.listen(3000,'localhost',function(){

console.log('Server started on port 3000');
})