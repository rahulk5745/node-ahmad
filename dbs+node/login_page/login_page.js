var express=require('express');
var routes=require('routes');
var http=require('http');
var path=require('path');
var mysql=require('mysql');
//all envoirments
var app=express();

app.set('port',process.env.PORT||4300);
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());

//development only 

var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'login_page'});

var url=require('url');
app.get('/login',function(req,res){
	res.sendFile(__dirname+"/public/login.html");
});


app.get('/register_action',function(req,res){
	var qq=url.parse(req.url,true).query;
	var username=qq.username;
	var password=qq.password;
	
	con.connect(function(err){
		if(err) throw err;
		console.log("connected");
		
		var sql="select * from login where username='"+username+"' and password='"+password+"' ";
		con.query(sql,function(err,result){
			if(err) throw err;
			if(result.length){
				res.sendFile(__dirname + "/public/chat.html");
				//res.end();
			}
			else
			{
				res.send("not inserted");
				res.end();
			}
		});
	});
});







app.get('/chat',function(req,res){
var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'login_page'});
	
		
	con.connect(function(err){
		if(err) throw err;
		console.log('connected');
		var sql="select * from drplist";
		con.query(sql,function(err,rows){
			if(err) throw err;
			console.log(rows[0].rows);
			res.render('testtable',{data:rows});
		});
		
	});
});

app.get('/submit',function(req,res){
	var qq=url.parse(req.url,true).query;
	
	console.log(qq.data1);
	res.end(qq.data1);
	
	con.connect(function(err){
		if(err) throw err;
		console.log('connected');
});
});



http.createServer(app).listen(app.get('port'),function(){
	console.log('express server listening o n port '+app.get('port'));
});

