var fs=require('fs');
fs.rename('m596.txt','m555.txt',function(err){
	if(err) throw err;
	console.log('file renamed');
	
});
