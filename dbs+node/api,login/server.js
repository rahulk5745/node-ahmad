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

var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'api'});

var url=require('url');
app.get('/login',function(req,res){
	res.sendFile(__dirname + "/public/login.html");
});

app.get('/register_action',function(req,res,next){
	var qq=url.parse(req.url,true).query;
	var name=qq.name;
	var password=qq.password;
	
	con.connect(function(err){
		if(err) throw err;
		console.log("connected");
		
		var sql="select * from login where name='"+name+"' and password='"+password+"' ";
		con.query(sql,function(err,result){
			if(err) throw err;
			if(result.length){
				res.render('showdata',{data:result});
				
			}
			else
			{
				res.send("not inserted");
				res.end();
				next();
			}
		});
	});
});







app.get('/add',function(req,res){
	res.sendFile(__dirname + "/public/add.html");
})

app.get('/insert',function(req,res,next){
	var qq=url.parse(req.url,true).query;
	var addname=qq.addname;
	var addpassword=qq.addpassword;

con.connect(function(err){
	
			//if(err)throw err;
			//console.log("connected");
			
var sql="insert into login values('"+addname+"','"+addpassword+"')";
						con.query(sql,function(err,result){
							if(err)throw err;
							if(result){
								
								//con.end();
								console.log("wwwmmmm");
								res.render('getinputdata',{data:result});
								  next();
							
							}

							});
						});
});


app.get('/show',function(req,res){
	res.redirect('/getinputdata');
})




http.createServer(app).listen(app.get('port'),function(){
	console.log('express server listening on port '+app.get('port'));
});

