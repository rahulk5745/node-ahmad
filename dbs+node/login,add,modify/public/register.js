var express=require('express');
var routes=require('routes');
var http=require('http');
var path=require('path');

var app=express();

var mysql=require('mysql');
//all environments
app.set('port',process.emv.PORT ||4300);

app.use(express.static(path.join(__dirname,'public')));
//developments only

var con=mysql.createConnection({
					host:"localhost",
					user:"root",
					password:"",
					database:"demo"
});
var url=require('url');
app.get('/login',function(req,res){
	res.sendFile(__dirname+"/public/login.html");
});
app.get('/register_action',function(req,res){
	var qq=url.parse(req.url,true).query;
var username=qq.username;
var password=qq.password;

con.connect(function(err){
			if(err)throw err;
			console.log("connected");
			
var sql="insert into login(name,password)values('"+username+"','"+password+"')";
						con.query(sql,function(err,result){
							if(err)throw err;
							if(result){
								res.redirect('/login');
							res.end();}
else
{
res.send("Not inserted");
		res.end();
}
							});
						});
});

http.createServer(app).listen(app.get('port'),function(){
console.log('Express server listening on port'+app.get('port'));
});
	
	
























