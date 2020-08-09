const proRoutr = require("express").Router();
var productController = require('./productController');
const resHndlr = require("../global/responder");



proRoutr.route("/createProduct")
.post([], function(req,res){

	productController.createProduct(req,res);
	//console.log('test:::::',userController);
})

module.exports = proRoutr

