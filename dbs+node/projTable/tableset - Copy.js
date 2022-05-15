var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');

var testtable = require('./routes/testtable');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); 
var mysql = require('mysql');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());

app.use(express.static(path.join(__dirname,'public')));

var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'demo'});
app.get('/testtable',testtable.list);

app.get('/delete/:userId', function (req, res) {
    //res.send(req.params);
	var sql = "delete from login where id="+req.params.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/testtable');
	});
})

app.get('/edit/:userId', function (req, res) {
	var sql = "Select * from login where id="+req.params.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.render('editUser',{page_title:'Edit Table',data:rows});
	});
})
app.get('/custSearch', function (req, res) {
	var query=url.parse(req.url,true).query;
	var sql = "Select * from login where username Like '%"+query.userVal+"%'";
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.render('search',{page_title:'Test Table',data:rows});
	});
})
app.post('/search', function (req, res) {
	var sql = "Select * from login where username Like '%"+req.body.userVal+"%'";
	//res.send(sql);
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.render('testtable',{page_title:'Test Table',data:rows});
	});
})

app.post('/update', function (req, res) {
    
	var sql = "Update login set username = '"+req.body.username +"', password ='"+req.body.password +"'  where id="+req.body.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/testtable');
	});
})

http.createServer(app).listen(app.get('port'),function(){
	console.log('Express Server listening on Port '+app.get('port'));
});