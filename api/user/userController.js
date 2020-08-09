const Constants = require('./userConstants');
var User = require('./user');
const resHndlr = require("../global/responder");
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

 module.exports={//Start

'userCreate':(req,res)=>{
  if(!req.body.userName ){
    return resHndlr.apiResponder(req, res, Constants.MESSAGES.RequiredField, 500);

  }else{
   let detail = { 
    'userName': req.body.userName,
    'userId':req.body.userId
   }
    User.create(detail)
    .then((enteruser)=>{
      return resHndlr.apiResponder(req, res, "Create User Successfully", 200,enteruser)
    })
    .catch((error)=>{
      return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
    })
  }
},
'userOderDetail':(req,res)=>{
  User.find({})
  .then((getDetai)=>{
    let arr = []
    getDetai.map((chek)=>{
      chek.oder.map((detail)=>{
        let data = {
          'name': chek.userName,
          'userId':detail.userId,
          'noOfOder':detail.noOfOder,
          'averageBillValue':detail.averageBillValue
        }
        arr.push(data)
      })
     
    })
    return resHndlr.apiResponder(req, res, "user Oder Detail", 200,arr)
  })
  .catch((error)=>{
    return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
  })

}

}//End