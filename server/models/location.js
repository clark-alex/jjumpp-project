const mongoose = require('mongoose')
const client = require('../models/Client.js')
// const Notification = require('../models/Notifications.js')
const user = require('../models/User.js')
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
    {
        name: { type:String, max:100 },
        // references the user model
        users: { type: [Schema.Types.ObjectId], ref:user},
        // references the client model
        client_id: { type: Schema.Types.ObjectId, ref:client},
        // references the rating model
        rating: { type: Number },
        address: {
            street: { type: String, required: true, max: 100 },
            city: { type: String, required: true, max: 100 },
            country: { type: String, required: true, max: 100 },
        },
        last_managed: { type: Date, default: Date.now },
        Facebook: { type: Boolean },
        Google_Analytics: { type: Boolean },
        Google_My_Business: { type: Boolean },
        Infusion_soft: { type: Boolean },
        Twitter: { type: Boolean },
        You_Tube: { type: Boolean },
        Linkedin: { type: Boolean },
    }
)

module.exports = mongoose.model('Location', LocationSchema)


