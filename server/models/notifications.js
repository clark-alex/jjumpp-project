const mongoose = require('mongoose')
const client = require('../models/Client.js')


const Schema = mongoose.Schema;

const NotificationsSchema = new Schema(
    {
        title: { type: String, required: true, max: 100 },
        Location_id: { type: String, required: true },
        client_id: {type: Schema.Types.ObjectId, ref:client}
    }
)

module.exports = mongoose.model('notifications', NotificationsSchema)


