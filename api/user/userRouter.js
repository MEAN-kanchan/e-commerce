const usrRoutr = require("express").Router();
var userController = require('../user/userController');
const resHndlr = require("../global/responder");




usrRoutr.route("/userCreate")
.post([], function(req,res){
	userController.userCreate(req,res);	
})

usrRoutr.route("/userOderDetail")
.get([], function(req,res){
	userController.userOderDetail(req,res);	
})

module.exports = usrRoutr
