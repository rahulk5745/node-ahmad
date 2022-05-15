var mysql=require('mysql');

exports.abc=function(req,res)
{
var con=mysql.createConnection
({ 
host:'localhost',
user:'root',
password:'',
database:'mydatabase'
 });

 con.connect(function(err)
{
if(err)throw err;
console.log('connected');
var sql="select * from login3";
con.query(sql,function(err,rows)
{
if(err)throw err;
res.render('6',{data:rows});
});
});
}

