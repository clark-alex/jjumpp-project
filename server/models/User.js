const mongoose = require('mongoose');
const client = require('../models/Client.js');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, max: 100 },
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  birth_date: { type: Date },
  img: { type: String },
  clientId: { type: Schema.Types.ObjectId, required: true, ref: client },
});

module.exports = mongoose.model('user', UserSchema);
