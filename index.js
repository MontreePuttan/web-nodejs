//import
var mysql = require('mysql');

//create connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "mohara",
	database: "web-nodejs"
});

//connect DB
con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
});