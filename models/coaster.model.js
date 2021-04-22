const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coasterModel = new Schema({
   name: {
    type: String,
    required: true
   },
    description: {
        type: String,
        default: 'Not defined'
    },
    inversions: {
        type: Number,
        default: 0
    },
    length: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
    park_id: {
        type: Schema.Types.ObjectId,
        ref: 'Park'
    }
})

//module.exports = mongoose.model('Coaster', coasterModel)

const Coaster = mongoose.model('Coaster', coasterModel)

module.exports = Coaster