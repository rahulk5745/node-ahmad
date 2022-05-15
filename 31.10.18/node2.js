var http=require('http');
var fs=require('fs');
var formidable=require('formidable');
var util=require('util');

var server=http.createServer(function(req,res){
	if(req.method.toLowerCase()=='get'){
		displayForm(res);
	}
	else if(req.method.toLowerCase()=='post'){
		processAllFieldOfTheForm(req,res);
	}
});

function displayForm (res){
	fs.readFile('form.html',function(err,data){
		res.writeHead(200,{
			'content-Type':'text/html',
			'content-Length':data.length
		});
		res.write(data);
		res.end();
	});
}
server.listen(1122);
console.log('server listening on 1122');


function processAllFieldOfTheForm(req,res){
	var form=new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		//store the data frrom the fields in your data store.
		//the data store could be a file on database or any other store based on your application.
		
		res.writeHead(200,{
			'content-Type':'text/plain'
		});
		res.write('recieved the data:\n\n');
		res.end(util.inspect({
			fields:fields,
			files:files
	}));
	});
		
}
server.listen(1122);
console.log('server listening on 1122');
