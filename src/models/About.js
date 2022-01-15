const { Schema, model } = require('mongoose');

const aboutSchema = new Schema({
    action: {
        type: Array,
        required: true
    },
    advantage: {
        type: Array,
        required: true
    },

});

module.exports = model('About', aboutSchema, 'about');