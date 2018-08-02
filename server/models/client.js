var mongoose = require('mongoose');
var Location = require('./Location')

var Schema = mongoose.Schema;

var ClientSchema = new Schema(
    {
        name: {type: String, required: true, max:50},
        locations: {type: [Schema.Types.ObjectId], ref:Location},
        image: {type: String}
    }
)

module.exports = mongoose.model('client',ClientSchema)


