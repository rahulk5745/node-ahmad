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
	res.sendFile(__dirname + "/public/login.html");
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


app.get('/add',function(req,res){
	res.sendFile(__dirname + "/public/add.html");
})

app.get('/insert',function(req,res,next){
	var qq=url.parse(req.url,true).query;
	var id=qq.id;
var name=qq.name;

con.connect(function(err){
	
			//if(err)throw err;
			//console.log("connected");
			
var sql="insert into drplist values('"+id+"','"+name+"')";
						con.query(sql,function(err,result){
							if(err)throw err;
							if(result){
								
								//con.end();
								console.log("wwwmmmm");
								res.redirect('/add');
								  next();
							
							}

							});
						});
});



app.get('/delete',function(req,res){
	var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'login_page'});
	
	con.connect(function(err){
		if(err) throw err;
		console.log('connected');
		var sql="select * from drplist";
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('deloutput',{data:rows});
		});
	});
});



app.get('/submit', function (req, res,next) {
    //res.send(req.params);
	
	var qq=url.parse(req.url,true).query;
	var sql = "delete from drplist where name='"+qq.kk+"' ";
	
	console.log(sql);
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect("chat.html");
		next();
	});
})





app.get('/update',function(req,res){
	var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'login_page'});
	
	con.connect(function(err){
		if(err) throw err;
		console.log('connected');
		var sql="select id from drplist";
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('updateoutput',{data:rows});
		});
	});
});



app.get('/submit11', function (req, res,next) {
    //res.send(req.params);
	
	var qq11=url.parse(req.url,true).query;
		var sql="select name from drplist where id='"+qq11.kk11+"'";
		
		console.log(sql);
		con.query(sql,function(err,rows)
		{
			 console.log(rows[0].name);
			//if(err) throw err;
		res.render("updatevalue",{data:rows});
		next();
});


app.get('/replace', function (req, res,next) {
    //res.send(req.params);
	
	var name=url.parse(req.url,true).query;
	var sql2 = "update drplist set name='"+name.aa+"' where id='"+qq11.kk11+"'";  
	
		con.query(sql2,function(err,rows)
		{

		res.redirect("chat.html");
		next();
});
});
});



http.createServer(app).listen(app.get('port'),function(){
	console.log('express server listening on port '+app.get('port'));
});

