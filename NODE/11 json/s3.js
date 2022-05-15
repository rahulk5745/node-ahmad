var express=require('express');
var app=express();
var fs=require("fs");

app.get('/:id',function(req,res)
{
fs.readFile(__dirname + "/" + "u.json", 'utf-8' ,function(err,data)
{
var abc=JSON.parse(data);
var xyz=abc["xyz"+ req.params.id]
console.log(xyz);
res.end(JSON.stringify(xyz));
});
})

var server=app.listen(9090,function()
{
var host=server.address().address
var port=server.address().port
console.log("example app running at http://%s:%s",port,host)

})