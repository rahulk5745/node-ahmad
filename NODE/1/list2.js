var express=require('express');
var url=require('url');
var path=require('path');
var http=require('http');
var routes=require('routes');
var mysql=require('mysql');
var app=express();
app.set('port',process.env.PORT||4300);
app.use(express.static(path.join(__dirname,'public')));

var con=mysql.createConnection
({
host:"localhost",
password:"",
user:"root",
database:"mydatabase"
});

app.get('/abc',function(req,res)
{
res.sendFile(__dirname+"/public/register2.html");
});


app.get('/register_acion',function(req,res)
{
var query=url.parse(req.url,true).query;
var username=query.username;
var password=query.password;

con.connect(function(err)
{
	if(err)throw err;
	console.log("connected");
	
	var sql="insert into register(username,password)values('"+username+"','"+password+"')";
	con.query(sql,function(err,result)
	{
		if(err)throw err;
		if(result)
		{
		res.redirect('/abc');
		}
		else
		{
			res.send("not inserted");
		}
	});
});
})
;
http.createServer(app).listen(app.get('port'),function()
{
console.log('express server listening on port'+app.get('port'));
})