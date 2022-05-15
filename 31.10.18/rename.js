var fs=require('fs');
fs.rename('m196.txt','m55.txt',function(err){
	if(err) throw err;
	console.log('file renamed!');
});
