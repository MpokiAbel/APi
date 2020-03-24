var express = require('express');

var app= express();

app.get('/tasks',function(req,rsp){

rsp.end('Server Woring');
});



app.listen(3000,function(){
 console.log('listening to port 3000')   
});