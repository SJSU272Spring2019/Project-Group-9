var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
ProductSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    type: {
        type: Array
    },
    actualprice: {
        type: String,
        required: true
    },
    discountedprice: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    picname: {
        type: String,
        required: true
    },
    pictype: {
        type: String,
        
    },
});

module.exports = mongoose.model('Product', ProductSchema);