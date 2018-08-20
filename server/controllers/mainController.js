const client = require('../models/Client.js');
const location = require('../models/Location.js');
const notification = require('../models/Notifications.js');
const rating = require('../models/Ratings.js');
const user = require('../models/User.js');

// simulating a logged in user
const session = { user: '5b5f6a9c2955432cc62320c2', clientId: '5b5fb6d7aa10fd0dfc56dec0' };
module.exports = {
  getUsersByLocation(req, res) {
    const { id } = req.params;
    user
      .find({ clientId: id }, (err, users) => {
        if (err) return console.error(err);
      })
      .then(users => res.status(200).send(users));
  },
  getLoggedin(req, res) {
    // just a simulation
    user
      .findById(session.user, err => {
        if (err) return console.error(err);
      })
      .then(activeUser => res.status(200).send(activeUser));
  },
  getLocationByClient(req, res) {
    const { id } = req.params;
    location
      .find({ clientId: id }, err => {
        if (err) return console.error(err);
      })
      .then(locations => res.status(200).send(locations));
  },
  // I chose to get notifications,ratings and users by client, so that I dont have to do an HTTP
  // request on each location component.
  getNotificationByClient(req, res) {
    const { id } = req.params;
    notification
      .find({ clientId: id }, err => {
        if (err) return console.error(err);
      })
      .then(notifications => res.status(200).send(notifications));
  },
  getRatingsByClient(req, res) {
    rating
      .find({ clientId: session.clientId }, err => {
        if (err) return console.error(err);
      })
      .then(individualRating => res.status(200).send(individualRating));
  },
  addLocation(req, res) {
    const {
      name,
      address,
      Facebook,
      googleAnalytics,
      googleMyBusiness,
      infusionSoft,
      Twitter,
      youTube,
      Linkedin,
    } = req.body;
    const newLocationinfo = {
      name,
      address: { street: address.street, city: address.city, country: address.country },
      Facebook,
      googleAnalytics,
      googleMyBusiness,
      infusionSoft,
      Twitter,
      youTube,
      Linkedin,
    };
    const newLocation = new location({
      name,
      address: { street: address.street, city: address.city, country: address.country },
      Facebook,
      googleAnalytics,
      googleMyBusiness,
      infusionSoft,
      Twitter,
      youTube,
      Linkedin,
      clientId: session.clientId,
      notifications: 0,
      avg_rating: 1,
    });
    newLocation.save((err, newLocation) => {
      if (err) return console.error(err);
      res.status(200).send(newLocation);
    });
  },
};
