const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    }





});

module.exports = model('Portfolio', portfolioSchema, 'portfolio');