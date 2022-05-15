var mysql=require('mysql');
exports.list=function(req,res){
	var con=mysql.createConnection({host:'localhost', user:'root', password:'', database:'list'});
	
	con.connect(function(err){
		if(err) throw err;
		console.log('connected');
	
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('forms',{data:rows});
		});
	});
}