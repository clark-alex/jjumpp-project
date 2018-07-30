const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const NotificationsSchema = new Schema(
    {
        title: { type: String, required: true, max: 100 },
        Location_id: { type: Number, required: true },
    }
)

module.exports = mongoose.model('Notifications', NotificationsSchema)


