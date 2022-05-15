var express=require('express');
var routes=require('routes');
var http=require('http');
var url=require('url');
var path=require('path');
var bodyparser=require('body-parser');
var app=express();
var mysql=require('mysql');
var test=require('./routes/testtable');

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
	var sql="delete from login2 where id="+req.params.userId;
	con.query(sql,function(err,rows)
	{
		if(err)throw err;
	res.redirect('/xyz');
	});
	
	
})

http.createServer(app).listen(app.get('port'),function()
{
console.log('express server listening on port' +app.get('port'));
});


