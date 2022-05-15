var express=require('express');
var app=express();
var url=require('url');
var mysql=require('mysql');
app.use(express.static('public'));
app.get('/login',function(req,res){
	res.sendFile(__dirname+"/public/login.html");
var mysql=require('mysql');
});

var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'login'});
app.get('/submit',function(req,res){
	var query=url.parse(req.url,true).query;
	var sql="select * from login where username='"+query.username+"' and password='"+query.password+" ";
	con.query(sql,function(err,rows){
		if(err) throw err;
		console.log(rows[0].username+rows[0].password);
	})
	console.log(query.username+query.password);
	
	res.end(query.username+query.password);
})

var server=app.listen(1234,function(err){
	if(err) throw err;
	console.log('express server listening on port 1234');
	console.log('connected');
	
});