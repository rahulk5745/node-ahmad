var express=require('express');
var body=require('body-parser');
var mysql=require('mysql');
var url=require('url');
var app=express();

var aa=body.urlencoded({extended:false});


app.use(express.static('public'));
app.get('/drop1',function(req,res){
	res.sendFile(__dirname + "/public/drop1.html");
});
var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'drp'});
app.get('/submit',function(req,res){
	var query=url.parse(req.url,true).query;
	var sql="select * from drplist where name='"+query.kk+"' ";
	con.query(sql,function(err,rows){
		if(err) throw err;
		console.log(rows[0].name);
	});
	console.log(query.kk);
	
	res.end(query.kk);
});

var server=app.listen(4500,function(){
	var host=server.address().address
	var port=server.address().port
	
	console.log("server listening at",host, port)
})