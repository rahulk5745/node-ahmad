var http=require('http');
var passport=require('passport');
var session=require('express-session');
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var url=require('url');
var path=require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(session(
{
secret:'woot',
resave:true,
saveunitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());
var sess;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'js')));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res)
{
res.render('index');
});



app.get('/login',function(req,res)
{});


app.get('/admin',function(req,res)
{
res.render("abc");
});


app.get('/loginform',function(req,res)
{
console.log("req has arrived");
res.send("hi");
console.log(sess);
res.redirect('/admin');
});

var server=app.listen(1234,function()
{
var host=server.address().address;
var port=server.address().port;
console.log("e ap listening http://%s%s",host,port)
})