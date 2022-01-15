const { Schema, model } = require('mongoose');

const advantageSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    }

});

module.exports = model('Advantage', advantageSchema, 'advantage');