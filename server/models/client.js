var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema(
    {
        name: {type: String, required: true, max:50},
        image: {type: String}
    }
)
// Virtual for Client

