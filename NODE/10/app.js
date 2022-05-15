var express = require('express');
var routes = require('routes');
var http = require('http');
var path = require('path');
var url = require('url');
var body = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use( body.json());
app.use( body.urlencoded({ extended : true }) );
app.set('port', process.env.PORT || 4300 );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var con = mysql.createConnection
({
	host : 'localhost',
	user : 'root',
	password : '',
	database: 'mydatabase'
});

app.get( '/', function( req, res ){
	 var sql = "select * from student";
	con.query(sql, function(err, rows){
		if( err )throw err;
		res.render('index', { data : rows });
		res.end();
	})
});
app.post('/getClass', function(req, res)
{
	var roll_number = req.body.roll_number;
	var sql = "select * from class WHERE  roll_number = '"+ roll_number + "'";
	con.query(sql, function(err, rows){
		if( err ) throw err;
		res.send( rows )
		res.end();
	})
})
app.post('/getSubjects', function(req, res){
	var class_name = req.body.class_name;
	var sql = "select * from  subject WHERE  class_name = '"+ class_name + "'";
	con.query(sql, function(err, rows){
		if( err ) throw err;
		res.send( rows )
		res.end();
	})
})
app.post('/saveStudent', function(req, res){
	var roll_number = req.body.roll_number;
	var studentClass = req.body.studentClass;
	var studentSubjectname = req.body.studentSubjectname;
	var marks = req.body.marks;
	var sql = "insert into marks ('roll_number`, `studentClass`, `studentSubjectname`, `marks`) VALUES ( '"+ roll_number +"', '"+ studentClass +"', '"+ studentSubjectname +"', '"+ marks + "' ) ";
	con.query(sql, function(err, result){
		if( err ) throw err;
		console.log( 'value inserted: '+ result );
		res.send( result )
		res.end();
	})
	
})


http.createServer(app).listen(app.get('port'), function(){
	console.log( 'Express server running at : '+ app.get('port') );
})