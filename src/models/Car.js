const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },

    name:{
        type: String,
        required: true
    },

    color:{
        type: String,
        required: true
    }
});

module.exports = model('Car', carSchema, 'car');