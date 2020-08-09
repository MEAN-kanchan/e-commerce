const Constants = require('./oderConstants');
const resHndlr = require("../global/responder");
var Oder = require('./oder');
const User = require('../user/user');
const Product = require('../product/product');
var mongoose = require('mongoose');
const { json } = require('body-parser');
mongoose.Promise = global.Promise;
module.exports={
	
	'oder':(req,res)=>{
		if(!req.body.productId || !req.body.subtotal || !req.body.userId ){
			return resHndlr.apiResponder(req, res, Constants.MESSAGES.RequiredField, 500);
		}
	else{
		let sum = req.body.subtotal.reduce(function(a, b){
			return a + b;
		}, 0);
		
		let no_of_oder = req.body.productId.length
		let aveBill = sum/no_of_oder
		let oderNo = ("" + Math.random()).substring(2,3)
		let oderDetail={
			'userId':req.body.userId,
			//'oderId':("" + Math.random()).substring(2,3),
			'noOfOder': oderNo,
			'qty':no_of_oder,
			'totalBill':sum,
			'averageBillValue':aveBill,
			'date':new Date(),	
		}
		Oder.create(oderDetail,function(err,saveDetail){		
			if(err){
				return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
			}else{
				
				let updateDetail={
					'userId':req.body.userId,
					'oderId':JSON.stringify(saveDetail._id),
					'qty':no_of_oder,
					'noOfOder': oderNo,
					'averageBillValue':aveBill,
					'date':new Date(),
					}				
				User.findOneAndUpdate({'_id':req.body.userId},{$push:{'oder':updateDetail}},{new:true})
				.then((done)=>{
					return resHndlr.apiResponder(req, res, "Your Oder Successfully Placed", 200)
				})
				.catch((error)=>{
					console.log(error)
				return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
			})
			} 
		})
		
	}
},

}