const { Schema, model } = require('mongoose');

const stocksSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }





});

module.exports = model('Stocks', stocksSchema, 'stocks');