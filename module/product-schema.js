const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

const products = mongoose.model('Product', productSchema);
module.exports = products