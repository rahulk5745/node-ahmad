var zlib = require('zlib');
var fs = require('fs');

var unzip = zlib.createUnzip();

var read = fs.createReadStream('oo.gz');
var write = fs.createWriteStream('n0m.txt');
//Transform stream which is unzipping the zipped file
read.pipe(unzip).pipe(write);	
console.log("unZipped Successfully");
											