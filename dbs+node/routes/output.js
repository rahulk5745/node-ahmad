var express=require('express');
var routes=require('routes');
var http=require('http');
var path=require('path');

var app=express();

var mysql=require('mysql');
//all environments
app.set('port',process.env.PORT ||4000);

app.use(express.static(path.join(__dirname,'routes')));
//developments only

var con=mysql.createConnection({
					host:'localhost',
					user:'root',
					password:"",
					database:'list'
});
var url=require('url');
app.get('/check',function(req,res){
	res.sendFile(__dirname+'/views/forms.html');
});
app.get('/register_action',function(req,res){
	var qq=url.parse(req.url,true).query;
var id=qq.id;
//var password=qq.password;

con.connect(function(err){
			if(err) throw err;
			console.log("connected");
			
var sql="select * from list";
						con.query(sql,function(err,result){
							if(err)throw err;
							if(result){
								res.redirect('/output');
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
	
	
























