var express=require('express');
var app=express();
var url=require('url');
var bodyParser=require('body-parser');
var path=require('path');
var http=require('http');


app.use(bodyParser.urlencoded({extended:true}));
var mysql=require('mysql');
app.set('views engine','ejs');
app.set('port',process.env.PORT||4500);
//app.set('views',path.join(__dirname,'public'));
app.set('views',path.join(__dirname,'views'));
var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'3dropdown'});



app.use(express.static('public'));
app.get('/drop3',function(req,res){
	var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'3dropdown'});
	var qq=url.parse(req.url,true).query;
	con.connect(function(err){
		if(err) throw err;
		console.log('connected');
		var sql="select * from 3drp where owner='"+qq.kk+"' ";
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('drop3.ejs',{data:rows});
		});
	});
});






http.createServer(app).listen(app.get('port'),function(){
	console.log('express server listening on port' +app.get('port'));
});
