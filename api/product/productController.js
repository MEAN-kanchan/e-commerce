const Constants = require('./productConstants');
var Product = require('./product');
const resHndlr = require("../global/responder");
const User = require('../user/user');
module.exports={//start

'createProduct':(req,res)=>{
if(!req.body.productName || !req.body.price)
      return resHndlr.apiResponder(req, res, Constants.MESSAGES.RequiredField, 500);
else{
		var productDetail = {
		productName:req.body.productName,
		price:req.body.price,
		productId:req.body.productId
		}
	Product.create(productDetail, function(err,addUser){
		if(err)
			 return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
		else{
			
			return resHndlr.apiResponder(req, res, "Create Stream Successfully", 200,addUser)
		}
	})
	}		
	


}

}

    