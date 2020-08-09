var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');
var http = require('http');
mongoose.connect('mongodb://localhost/e-commerce');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '10mb'}));
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, browser_id");
 next();
});
app.get('/a',function(req,res){
	res.send("WELCOME!!!!!!!!!!");
});
 require("./api/router")(app); 
console.log('Hello World...!');

app.listen(8007, () => console.log('Example app listening on port 8007!'));
console.log('your server will be started');
