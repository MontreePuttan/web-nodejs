var express = require('express');
var cookie = require('cookie-parser');
var body = require('body-parser');
var app = express();

app.use(body());
app.use(cookie());
app.set('view engine','ejs');



app.get('/',function(req,res){
	res.send('<h1>HelloWorld</h1>');
});

app.get('/profile',function(req,res){
	res.send('<h1>Profile</h1>');
});

// route param name
app.get('/profile/:name',function(req,res){
	res.send('<h1>Profile '+ req.params.name +'</h1>');
});

// route param id
app.get('/profile/:id',function(req,res){
	res.send('<h1>Profile '+ req.params.id +'</h1>');
});

// Middleware
app.use('/user/profile/:name',function(req,res,next){
	console.log('Resquest : '+ req.params.name +' = '+ new Date(),req.method,req.url);
});

//Ejs Template Engine
app.get('/template',function(req,res){
	var data = {name:"Natty",age:26,job:"Programmer"};
	res.render('profile',{user:data});
});


// show page
app.get('/home',function(req,res){
	res.render('home');
});

app.get('/contact',function(req,res){
	res.render('contact');
});

app.get('/database',function(req,res){
	res.render('database');
});

// method get
app.get('/showFormGet',function(req,res){
	res.sendFile(__dirname + "/" + "showFormGet.html");
});

app.get('/showDataGet',function(req,res){
	data = {
		fname:req.query.fname,
		lname:req.query.lname
	};
	console.log(data);
	res.end(JSON.stringify(data));
});


// method post
app.get('/showFormPost',function(req,res){
	res.sendFile(__dirname + "/" + "showFormPost.html");
});

app.post('/showDataPost',function(req,res){
	data = {
		fname:req.body.fname,
		lname:req.body.lname
	};
	console.log(data);
	res.end(JSON.stringify(data));
});


// cookie
app.get('/createCookie',function(req,res){
	res.cookie('myCookie','montree');
	res.end('Create Cookie');
});

app.get('/deleteCookie',function(req,res){
	res.clearCookie('myCookie');
	res.end('Delete Cookie');
});


app.listen(8081);