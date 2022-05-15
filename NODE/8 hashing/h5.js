var zlib=require('zlib');
var fs=require('fs');
var unzip=zlib.createUnzip();
var read=fs.createReadStream('p990.gz');
var write=fs.createWriteStream('abc.txt');
read.pipe(unzip).pipe(write);
console.log("unzipped successfully");
