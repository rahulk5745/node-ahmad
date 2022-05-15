var express=require('express');
var http=require('http');
var mysql=require('mysql')
var app=express();
var bodyparser=require('body-parser');
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended: true})); 
var mod=require('./table_module');
var abc=bodyparser.urlencoded({extended:false});

var con=mysql.createConnection({host:'localhost',user:'root',password:'',database:'property'});
app.get('/',mod.list);
app.post('/sel',abc,function (req,res) {
	var q="select owner from property_001 where person like '%"+req.body.person+"%' && type like '%"+req.body.type+"%' && location like '%"+req.body.location+"%'";
	con.query(q,function (err,rows) {
		if(err) return err;
		res.send({data:rows});

	})
})

var port=process.env.PORT ||8080;
http.createServer(app).listen(port,()=>console.log('server is running on port '+port+'!'))