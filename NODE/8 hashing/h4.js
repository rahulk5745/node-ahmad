var zlib=require('zlib');
var fs=require('fs');
var zip=zlib.createGzip();
var read=fs.createReadStream('abc1.txt');
var write=fs.createWriteStream('p990.gz');
read.pipe(zip).pipe(write);
console.log("zipped successfully");