var mongoose = require('mongoose');

const Schema = mongoose.Schema;
var usersSchema = mongoose.Schema({
	userName: {type:String,require:true},
	oder:[{
		userId:{type:String},
		oderId:{type:String},
		noOfOder: {type:Number,default:0},
		qty:{type:Number},
		date:{type:Date},
		averageBillValue:{type:Number}
	}]
},{strict:false})
	


module.exports = mongoose.model('Users',usersSchema);

