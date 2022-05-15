var url=require('url');
var adr='http://localhost:8080/default.htm?year=2018&month=november';
//parse the address:

var q=url.parse(adr,true);
/*the parse method returns an object containing url properties*/

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/* the query property returns an object with all the querystring parameters as properties:*/

var data=q.query;
console.log(data.month);
