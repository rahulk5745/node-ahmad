var express=require('express');
var routes=require('routes');
var http=require('http');
var url=require('url');
var path=require('path');
var bodyparser=require('body-parser');
var abc=bodyparser.urlencoded({extended:false});

var test=require('./routes/testtable');
var app=express();
var mysql=require('mysql');

app.set('port',process.env.PORT ||4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

var con=mysql.createConnection
({ 
host:'localhost',
user:'root',
password:'',
database:'mydatabase'
});


app.get('/xyz',test.abc);


app.get('/delete/:userId',function(req,res)
{
	var sql="delete from login3 where id="+req.params.userId;
	con.query(sql,function(err,rows)
	{
		if(err)throw err;
	res.redirect('/xyz');
	});
});

app.get('/edit/:userId',function(req,res)
{
	var sql="select *  from login3 where id="+req.params.userId;
	con.query(sql,function(err,rows)
	{
		if(err)throw err;
	res.render('edituser',{page_title:'edituser',data:rows});
	});
});

app.post('/update',abc,function(req,res)
{
	var sql="update login3 set username='"+req.body.name+"',password='"+req.body.password+"' where id="+req.body.userId;
	console.log(sql);
	con.query(sql,function(err,rows)
	{
		if(err)throw err;
	res.redirect('/xyz');
	});
});



http.createServer(app).listen(app.get('port'),function()
{
console.log('express server listening on port' +app.get('port'));
});


