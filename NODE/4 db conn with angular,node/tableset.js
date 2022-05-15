var express=require('express');
var routes=require('routes');
var http=require('http');
var url=require('url');
var path=require('path');
var bodyParsar=require('body-parser');
var app=express();
var mysql=require('mysql');

app.set('port',process.env.PORT|| 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyParsar.json());
app.use(bodyParsar.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'js')));

var con=mysql.createConnection
({
	host:'localhost',
	user:'root',
	password:'',
	database:'mydatabase'
	});

app.get('/',function(req,res)
{
res.render('index');
});

app.post('/custsearch',function(req,res)
{
var sql="insert into messages(name,email,message)values('"+req.body.name+"','"+req.body.email+"','"+req.body.message+"')";
con.query(sql,function(err,rows)
{
if(err)
{
console.log(err);
}
else
{
var sqlquery="select * from messages where id='"+rows.insertId+"' ";
console.log(sqlquery);
con.query(sqlquery,function(err,rowsdata)
{
if(err)throw err;
res.send(rowsdata);
});
}});
})

http.createServer(app).listen(app.get('port'),function()
{
console.log('express server listening on port' +app.get('port'));
});
