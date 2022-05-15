var express=require('express');
var routes=require('routes');
var http=require('http');
var path=require('path');
var app=express();
var mysql=require('mysql');
var url=require('url');

app.set('port',process.env.PORT|| 4300);
app.use(express.static(path.join(__dirname,'public')));

var con=mysql.createConnection
({
host:"localhost",
user:"root",
password:"",
database:"mydatabase"
});

app.get('/xyz',function(req,res)
{
res.sendFile(__dirname+ "/public/login.html");
});

app.get('/register_action',function(req,res)
{
var query=url.parse(req.url,true).query;
var username=query.username;
var password=query.password;

con.connect(function(err)
{
if(err)throw err;
console.log("connected!");

var sql="insert into login1(username,password)values('"+username+"','"+password+"')";
con.query(sql,function(err,result)
{
if(err)throw err;
if(result)
{res.redirect('/xyz');}
else
{res.send("not inserted");}
});
});

})

http.createServer(app).listen(app.get('port'),function()
{
console.log('express server listening on port '+app.get('port'));
});

