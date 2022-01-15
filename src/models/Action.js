const { Schema, model } = require('mongoose');

const actionSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },

});

module.exports = model('Action', actionSchema, 'action');