var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var oderSchema = mongoose.Schema({
	//oderId:{type:Number},
	userId:{type:String},
	noOfOder:{type:String},
	qty:{type:Number},
	averageBillValue:{type:Number},
	totalBill:{type:Number},
    date:{type:Date}
});

module.exports = mongoose.model('Oder',oderSchema);

