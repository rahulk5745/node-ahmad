var crypto=require('crypto');
var hash=crypto.createHash('sha1');
data=hash.update('kaka','utf-8');
gen_hash=data.digest('hex');
console.log("hash:"+gen_hash);
