const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parkSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    description: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 500,
        trim: true
    },
    active: {
        type: Boolean,
        default: true
    }
    
})
const Park = mongoose.model('Park', parkSchema)
module.exports = Park