var express		 	= require("express");
    bodyParser 	 	= require("body-parser");
	methodOverride 	= require("method-override");
	expressSanitizer= require("express-sanitizer");
	request 		= require('request');

app 			 	= express();


//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//LANDING
app.get("/", function(req, res){
	request('http://corona-api.com/countries/IN', function (error, response, body) {
	  var data = JSON.parse(body);
	  res.render("landing",{data:data});
	  console.log(data["data"]["latest_data"]);
	});
});

app.get("/warriors", function(req,res){
	res.render("warrior");
});

 
var PORT = process.env.PORT || 4269 
//LISTEN 
app.listen(PORT, function(){
	console.log("aboard on the flight");
});