var express=require('express');
var app=express();

app.use(express.static('public'));

var body=require('body-parser');
var aa=body.urlencoded({extended:false});

var url=require('url');//http://localhost:4040?a=10&b=33

app.get('/register',function(req,res){
	res.sendFile(__dirname+"/public/register.html");
})

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/public/login.html");
})

app.get('/register_action',function(req,res){
	var query=url.parse(req.url,true).query;//localhost:200/login?a=10
	var username=query.username;
	var userpassword=query.password;
	res.write(username+""+userpassword);
	
	res.end();
})

app.post('/login_action',aa,function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	res.write(username);
	res.end();
	console.log(password);
})


var server=app.listen(8082,function(){
	var host=server.address().address
	var port=server.address().port
	
	console.log('Example app listening at http://%s:%s',host,port)
})

