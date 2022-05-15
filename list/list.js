var express=require('express');
var routes=require('routes');
var http=require('http');
var url=require('url');
var path=require('path');
var bodyParser=require('body-parser');
//===bodyParser is used to fing value via method post

var testtable=require('./routes/tableset');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
var mysql=require('mysql');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodoverride());

app.use(express.static(path.join(__dirname,'public')));

var con=mysql.createConnection
({host:'localhost',user:'root',password:"",database:'mynode988'});
app.get('/testtable',testtable.list);
http.createServer(app).listen (app.get('port'),function(){
	
	console.log('express server listening on port'+app.get('port'));
	
});


