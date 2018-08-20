const mongoose = require('mongoose');
const client = require('../models/Client.js');

const { Schema } = mongoose;

const NotificationsSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  Location_id: { type: String, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: client },
});

module.exports = mongoose.model('notifications', NotificationsSchema);
