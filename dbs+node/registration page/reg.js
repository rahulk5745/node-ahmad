var express=require('express');
var routes=require('routes');
var http=require('http');
var path=require('path');
var mysql=require('mysql');
var app=express();

app.set('port',process.env.PORT||3600);
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());

var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'regpage'});

var url=require('url');
app.get('/reg',function(req,res){
	//res.sendFile(__dirname + "/public/reg.html");
	res.render('reg');
});


app.get('/submit',function(req,res){
	var qq=url.parse(req.url,true).query;
	var id=qq.id;
var name=qq.name;



	con.connect(function(err){
		if(err) throw err;
		var sql="insert into reg values('"+id+"','"+name+"')";
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			//res.render('regoutput',{data:rows});
		});
		var sql1="select * from reg";
			con.query(sql1,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('regoutput',{data:rows});
		});
	});
});
	




	
	











http.createServer(app).listen(app.get('port'),function(){
	console.log('express server listening on port'+app.get('port'));
});





