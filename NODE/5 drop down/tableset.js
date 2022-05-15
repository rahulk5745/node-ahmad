var express=require('express');
var routes=require('routes');
var http=require('http');
var url=require('url');
var path=require('path');
var bodyParsar=require('body-parser');

var port=process.env.process||4300;
var app=express();
app.use(bodyParsar.json());
app.use(bodyParsar.urlencoded({extended:true}));
var mysql=require('mysql');
app.set('port',process.env.PORT|| 4300);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'js')));

var con=mysql.createConnection({host:'localhost',user:'root',password:'',database:'mydatabase'});

app.get('/',function(req,res)
{
	console.log("hello");
	res.render('index');
});

app.post('/dropdown',function(req,res)
{
	console.log("dropdown");
var sqlQuery = "Select * from messages1 where id = '"+req.body.userId+"'";
con.query(sqlquery1,function(err,rowsdata){
if(err) throw err;

res.send({data:rowsdata});
});
})


app.post('/getdropdown',function(req,res)
{
	console.log("getdropdown");
var sqlquery= "select * from messages1";
con.query(sqlquery,function(err,rowsdata)
{
if(err)throw err;
res.send(rowsdata);
});
})


http.createServer(app).listen(app.get('port'),function()
{
console.log('express server listening on port' +app.get('port'));
});
