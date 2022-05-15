var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'mynode988'
	
});

con.connect(function(err){
	if(err) throw err;
	console.log('Connected');
	var sql = "INSERT INTO employee (empno,name,address) VALUES (1,'ajay','chd')";
	con.query(sql,function (err,result){
		if (err) throw err;
		console.log('1 record inserted');
		
	});
});
