var mysql=require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:''
	database:'mynode988'
	
});

con.connect(function(err){
	if(err) throw err;
	console.log('Connected');
	var sql="INSERT INTO employee (empno,name,address) VALUES ?";
var values=[
	[100,'john', 'highway 71'],
	[101,'a', 'highway 71'],
	[102,'b', 'highway 72'],
	[103,'c', 'highway 73'],
	[104,'d', 'highway 74'],
	[105,'e', 'highway 75'],
	[106,'f', 'highway 76'],
	[107,'g', 'highway 77']
];

con.query(sql, [values], function (err, result){
	if (err) throw err;
	console.log('Number of records inserted: '+ result.affectedRows);
});	
});