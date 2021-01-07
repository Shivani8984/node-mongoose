const mongoose = require('mongoose'); //importing mongoose
const Schema = mongoose.Schema; //making a shorthand to the mongoose.schema function for us so that we can just refer to it as schema

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        require: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const campsiteSchema = new Schema({ //instantiates a new object named campsite schema
    name: {
        type: String,
        required: true,
        unique: true // no 2 documents in this collection should have the same (name) field
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, { //this second argument is used for various configuration options
    timestamps: true //automatically add 2 properties called (created at) & (updated at)
});

//created a model using this schema
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;