const mongoose = require('mongoose');
const Client = require('../models/Client.js');

const { Schema } = mongoose;

const RatingSchema = new Schema({
  // references Location model
  Location_id: { type: String, required: true },
  comments: { type: String, required: true, max: 500 },
  stars: { type: Number, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: Client },
});

module.exports = mongoose.model('rating', RatingSchema);
