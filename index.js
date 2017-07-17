//import
var mysql = require('mysql');

//create connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "mohara",
	database: "web-nodejs"
});

//connect DB and Insert
// con.connect(function(err){
// 	if(err) throw err;
// 	console.log("Connected");
// 	sql = "INSERT INTO `product` (`product_id`, `product_name`, `brand_id`, `product_price`, `product_image`) VALUES ('2', '2222', '2', '222', '22222');";
// 	con.query(sql,function(err,result){
// 		if(err) throw err;
// 		console.log("Insert Complete");
// 	});
// });


//show data
// con.connect(function(err){
// 	if(err) throw err;
// 	console.log("Connected");
// 	sql = "SELECT * FROM `product`";
// 	con.query(sql,function(err,result){
// 		if(err) throw err;
// 		console.log(result);
// 	});
// });


// delete  data
// con.connect(function(err){
// 	if(err) throw err;
// 	console.log("Connected");
// 	sql = "DELETE FROM product WHERE product_id='8'";
// 	con.query(sql,function(err,result){
// 		if(err) throw err;
// 		console.log("Delete Complete");
// 	});
// });


// update data
con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
	sql = "UPDATE product SET product_name='keyboard' WHERE product_id='7'";
	con.query(sql,function(err,result){
		if(err) throw err;
		console.log("Update Complete");
	});
});