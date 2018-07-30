const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {type: String, required: true, max:100},
        first_name: {type: String, required:true, max:100},
        last_name: {type: String, required:true, max:100},
        birth_date: {type: Date}
    }
)


module.exports = mongoose.model('User',UserSchema)


