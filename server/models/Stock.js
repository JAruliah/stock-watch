const mongoose = require('mongoose')

const StockSchema = mongoose.Schema({
    symbol:String,
    close:Number,
    open:Number,
    low:Number,
    high:Number,
    change:Number
})

module.exports = mongoose.model('Stock',StockSchema)