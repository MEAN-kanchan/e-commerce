var mongoose = require('mongoose');

const Schema = mongoose.Schema;
var productSchema = mongoose.Schema({

productName:{type:String,require:true},
productId:{type:String},
price:{type:Number},
});

module.exports = mongoose.model('Product',productSchema);


