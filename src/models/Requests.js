const { Schema, model } = require('mongoose');

const requestsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    number:{
      type:String,
      required:true
    },
    date:{
        type:String,
        required:true
    }

});

module.exports = model('Requests', requestsSchema, 'requests');