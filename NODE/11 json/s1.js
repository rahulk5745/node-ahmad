var express=require('express');
var app=express();
var fs=require("fs");

app.get('/abc',function(req,res)
{
fs.readFile(__dirname + "/" + "u.json", 'utf-8',function(err,data)
{
console.log(data);
res.end(data);
});
})

var server=app.listen(9090,function()
{
	var host=server.address().address;
	var port=server.address().port;
	console.log("express running at http://%s:%s",host,port);
});