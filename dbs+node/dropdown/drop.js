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
app.set('views',path.join(__dirname,'public'));
//app.set('views',path.join(__dirname,'views'));
var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'drp'});

app.get("/drop",function(req,res)
{
	res.render("drop.ejs");
});
http.createServer(app).listen(app.get('port'),function(){
	console.log('express server listening on port' +app.get('port'));
});

app.use(express.static('public'));
app.get('/submit',function(req,res){
	
	var  query=url.parse(req.url,true).query;
	var sql="select * from drplist where name='"+query.kk+"' ";
	con.query(sql,function(err,rows){
		if(err) throw err;
		console.log(rows[0].name);
	});
	console.log(query.kk);
	
	res.end(query.kk);
	
	
});

