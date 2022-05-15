var express=require('express');
var app=express();
var fs=require("fs");

var user1={"user4":
{"name":"mohit","password":"password","profession":"teacher","id":4}}

app.get('/addUser',function(req,res)
{
fs.readFile(__dirname + "/" + "user.json", 'utf-8' ,function(err,data)
{
data=JSON.parse(data);
data["user4"]=user1["user4"];
console.log(data);
res.end(JSON.stringify(data));
});
})

var server=app.listen(8081,function()
{
var host=server.address().address
var port=server.address().port
console.log("example app listening at http://%s:%s",host,port)
})
