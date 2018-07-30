const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const RatingSchema = new Schema(
    {
        name: {type: String, required: true, max:100},
        Location_id: {type: Number, required:true},
        comments: {type: String, required:true, max:500},
        stars: {type: Number, required:true}
    }
)

module.exports = mongoose.model('Rating',RatingSchema)


