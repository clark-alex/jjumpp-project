const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const LocationSchema = new Schema(
    {
        name: {type: String, required: true, max:100},
        client_id: {type: String, required:true, max:100},
        address_street: {type: String, required:true, max:100},
        address_city: {type: String, required:true, max:100},
        address_country: {type: String, required:true, max:100},
        last_managed: {type: String, required:true, max:100},
        Facebook: {type: Boolean},
        Google_Analytics: {type: Boolean},
        Google_My_Business: {type: Boolean},
        Infusion_soft: {type: Boolean},
        Twitter: {type: Boolean},
        You_Tube: {type: Boolean},
        Linkedin: {type: Boolean},
    }
)


module.exports = mongoose.model('Location',LocationSchema)


