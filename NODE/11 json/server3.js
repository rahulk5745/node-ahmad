var express=require('express');
var app=express();
var fs=require("fs");

app.get('/:id',function(req,res)
{
fs.readFile(__dirname + "/" + "user.json",'utf-8',function(err,data)
{
var users=JSON.parse(data);
var user=users["user" +req.params.id]
console.log(user);
res.end(JSON.stringify(user));
});
})

var server=app.listen(8081,function()
{
var host=server.address().address
var port=server.address().port
console.log("example app listening at http://%s:%s",host,port)
})
