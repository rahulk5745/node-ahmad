var express=require('express');
var routes=require('routes');
var http=require('http');
var path=require('path');

var app=express();

var mysql=require('mysql');
//all environments
app.set('port',process.env.PORT ||4300);

app.use(express.static(path.join(__dirname,'views')));
app.set('view engine','ejs');

//developments only

var con=mysql.createConnection({
					host:'localhost',
					user:'root',
					password:"",
					database:'demo'
});
var url=require('url');
app.get('/forms',function(req,res){
	res.sendFile(__dirname+'/views/login.html');
});
app.get('/forms_action',function(req,res){
	var qq=url.parse(req.url,true).query;
var id=qq.id;

con.connect(function(err){
			if(err) throw err;
			console.log("connected");
			
var sql="select * from form where id='"+id+"'";
						con.query(sql,function(err,result){
							if(err)throw err;
							if(result){
								res.render('loginform',{data:result});
							res.end();}
else
{
res.send("No Found");
		res.end();
}
							});
						});
});




app.get('/edit',function(req,res)
{res.render('drop');
res.end();});



http.createServer(app).listen(app.get('port'),function(){
console.log('Express server listening on port'+app.get('port'));
});
	
	
























