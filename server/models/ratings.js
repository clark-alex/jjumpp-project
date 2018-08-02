const mongoose = require('mongoose')
const Client = require('../models/Client.js')
const Schema = mongoose.Schema;

const RatingSchema = new Schema(
    {
        //references Location model
        Location_id: {type: String, required:true},
        comments: {type: String, required:true, max:500},
        stars: {type: Number, required:true},
        client_id: {type: Schema.Types.ObjectId, ref:Client}
    }
)

module.exports = mongoose.model('rating',RatingSchema)


