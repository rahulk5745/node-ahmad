var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');

var testtable = require('./routes/testtable');
var app = express();

var mysql = require('mysql');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/delete/:userId', function (req, res) {
    //res.send(req.params);
	var sql = "delete from login where id="+req.params.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/testtable');
	});
})

var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'demo'});
app.get('/testtable',testtable.list);


http.createServer(app).listen(app.get('port'),function(){
	console.log('Express Server listening on Port '+app.get('port'));
});