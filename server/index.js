require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainController');
const dummyCtrl = require('./controllers/dummyDataController');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ==== Mongoose ====
const mongoDB = CONNECTION_STRING;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connection up and running');
});

// === api endpoints ===
// simulating a get for a user
app.get('/api/loggedIn', mainCtrl.getLoggedin);

app.get('/api/notifications/:id', mainCtrl.getNotificationByClient);
app.get('/api/ratings/:id', mainCtrl.getRatingsByClient);
app.get('/api/users/:id', mainCtrl.getUsersByLocation);
app.get('/api/locations/:id', mainCtrl.getLocationByClient);
app.post('/api/addLocation', mainCtrl.addLocation);

// === Dummy Data ===
app.post('/dummydata/addLocation', dummyCtrl.addLocation);
app.post('/dummydata/addRatings', dummyCtrl.addRatings);
app.post('/dummydata/addNotifications', dummyCtrl.addNotifications);
app.post('/dummydata/addClient', dummyCtrl.addClient);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
