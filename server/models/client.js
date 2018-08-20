const mongoose = require('mongoose');
const Location = require('./Location');

const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: { type: String, required: true, max: 50 },
  locations: { type: [Schema.Types.ObjectId], ref: Location },
  image: { type: String },
});

module.exports = mongoose.model('client', ClientSchema);
