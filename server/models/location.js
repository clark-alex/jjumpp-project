const mongoose = require('mongoose');
const client = require('../models/Client');
// const Notification = require('../models/Notifications.js')
const user = require('../models/User');
const rating = require('../models/Ratings');

const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: { type: String, max: 100 },
  // references the user model
  users: [{ type: Schema.Types.ObjectId, ref: user }],
  // references the client model
  clientId: { type: Schema.Types.ObjectId, ref: client },
  // references the rating model
  ratings: [{ type: Schema.Types.ObjectId, ref: rating }],
  avg_rating: { type: Number },
  address: {
    street: { type: String, required: true, max: 100 },
    city: { type: String, required: true, max: 100 },
    country: { type: String, required: true, max: 100 },
  },
  notifications: { type: Number },
  last_managed: { type: Date, default: Date.now },
  Facebook: { type: Boolean },
  Google_Analytics: { type: Boolean },
  Google_My_Business: { type: Boolean },
  Infusion_soft: { type: Boolean },
  Twitter: { type: Boolean },
  You_Tube: { type: Boolean },
  Linkedin: { type: Boolean },
});

module.exports = mongoose.model('location', LocationSchema);
