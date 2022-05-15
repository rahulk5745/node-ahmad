var express=require('express');
var app=express();
var fs=require("fs");

var abc=
{"user4":
{"name":"pjharul","password":"njldn","profession":"ed","id":13}
}


app.get('/xyz',function(req,res)
{
fs.readFile(__dirname+ "/" + "u.json", 'utf-8', function(err,data)
{
data=JSON.parse(data);
data["user4"]=abc["user4"];
console.log(data);
res.end(JSON.stringify(data));
});
})

var server=app.listen(9090,function()
{
var host=server.address().address;
var port=server.address().port;
console.log("example app running at http://%s:%s", host,port);
})