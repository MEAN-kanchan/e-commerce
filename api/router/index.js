var express = require('express'),
app = express()
const responseHandler = require('../global/responder');
var userRouters =  require('../user/userRouter');
var oderRouters =  require('../oder/oderRouter');
var productRouters =  require('../product/productRouter');


module.exports = function(app){
	app.use('/user', userRouters);
	app.use('/product', productRouters);
	app.use('/oder', oderRouters);
	app.use(responseHandler.apiResponder);
}