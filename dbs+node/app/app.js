var express=require('express');
var path=require('path');
var favicon=require('server-fevicon');
var logger=require('morgan');
var cookieParser=require('body-parser');

var index=require('./routes/index');
var users=require('./routes/users');

var app=expres();

//view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

//login script from here
var flash=require('connect-flash');
var crypto=require('crypto');

/* login script */
var passport=require('passport');
var LocalStrategy=require('passport-local').strategy;
var connection=require('./lib/dbconn');
var sess=require('express-session');
var store=require('express-session').store;
var BetterMemoryStore=require(__dirname+'/memory');
var store=newBetterMemoryStore({express:60 *60*1000,debug:true})

app.use(sess({
	name:'JESICON',
	secret:'MYSECRETISVERYSECRET',
	store:'store',
	resave:'true',
	SaveUninitialize:true
}));
//uncomment after placing your favicon in public

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/',index);
app.use('/users',users);

//passport strategy--the express session middleware before calling passport.session()

passport.use('local',new LocalStrategy({
	usernameField:'username',
	passwordField:'password',
	passReqCallback:true//password entire
	//req to callback
},function(req,username,password,done){
	console.log(username+'='+password);
	
	if(!username||!username){return
	done(null,false,req.flash('message','all field are required.'));}
	
	var salt='7fa73b47df808d36c5fe328546ddef8b9011b2c6';
	
	connection.query("select * from tbl_users where username=?",[username],function(err,rows){
		console.log(err);
		if(err) return done(req.flash('message',err));
		if(!rows.length){return done(null,false,req.flash('message',Invalid username or password.));}
		
		salt=salt+' '+password;
		var exepassword=crypto.createHash('sha1').update(salt).digest('hex');
		
		var dbPassword=rows[0].password;
		if(!(dbpassword==exepassword)){
			return done(null,false,req.flash('message','Invalid username or password.'));
		}
		req.session.user=rows[0];
		return done(null,rows[0]);
	)};
}
));

passport.serializeUser(function(user,done){
	done(null,user.id);
});

passport.deserializeUser(function(id,done){
	connection.query("select * from tbl_users where id="+id,function(err,rows){
		done(err,rows[0]);
		
	});
});
app.get('/signin',function(req,res){
	res.render('login/index',{'message':req.flash('message')});
});

app.post("/signin",passport.authemticate('local',{
	successRedirect:'/users',
	failureRedirect:'/signin',
	failureFlash:true
}),function(req,res,info){
	res.render('login/index',{'message':req.flash('message')});
});

app.get('/login',function(req,res){
	req.session.destroy();
	req.logout();
	res.redirect('/signin');
});

//catch 404 and forward to error handler 
app.use(function(err,req,next){
	//set locals, only providing error handler
	res.locals.message=err.message;
	res.locals.error=req.app.get('env')==='development'?err:{};
	//render the error page
	res.status(err.status||500);
	res.render('error');
		
	});
	module.exports=app;
	app.listen(3000,function(){
		console.log("App started on PORT 3000");
	});

