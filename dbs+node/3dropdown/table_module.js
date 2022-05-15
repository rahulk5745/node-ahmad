var mysql=require('mysql');
exports.list=function (req,res) {
	var con=mysql.createConnection({host:'localhost',user:'root',password:'',database:'property'});
	con.connect(function (err) {
		if(err) return err;
		console.log('database connected');
		var q="select * from property_001";
		con.query(q,function (err,rows) {
			if(err) throw err;
			res.render('dropdown',{data:rows})
		})
	})
}