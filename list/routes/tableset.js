var mysql=require('mysql');
exports.list=function(req,res){
	var con=mysql.createConnection
	({host:'localhost',user:'root',password:"",database:'mynode988'});
	
	con.connect(function(err){
		if(err) throw err;
		console.log('connected');
		var sql="select * from employee";
		
		
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('testtable',{page_title:'testTable',data:rows});
			//===render is a function which open express file form node
			
		});
	});
}
