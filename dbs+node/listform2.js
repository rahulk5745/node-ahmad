var express=require('express');
var routes=require('routes');
var http=require('http');
var url=require('url');
var path=require('path');
var bodyParser=require('body-parser');

var forms=require('./routes/forms');
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var mysql=require('mysql');
app.set('port',process.env.PORT||4400);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());



var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'list'});

app.get('/forms',forms.listforms);
http.createServer(app).listen(app.get('port'),function(){
	console.log('express server listening on port' +app.get('port'));
});









