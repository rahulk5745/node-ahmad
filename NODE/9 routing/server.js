var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.json());

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'images')));
app.use(express.static(path.join(__dirname,'js')));
app.use(express.static(path.join(__dirname ,'pages')));

app.get('/',function(req,res)
{
res.render('index');
});

var con=mysql.createConnection
({
host:"localhost",
user:"root",
password:"",
database:"mydatabase"	
});

app.post("/register",function(req,res)
{
username1=req.body.username;
password1=req.body.password;
	
	var sql="insert into register(username,password)values('"+username1+"','"+password1+"')";
	con.query(sql,function(err,result)
	{
		if(err)throw err;
		
		if(result)
		{
			
			res.send("inserted");
		}
	});
	});

app.post("/login",function(req,res)
{
username2=req.body.username;
password2=req.body.password;
	
console.log("Hello");
	});

http.createServer(app).listen(app.get('port'),function()
{
	console.log('Express Server listening on Port '+app.get('port'));
});