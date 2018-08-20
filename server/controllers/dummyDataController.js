const Client = require('../models/Client.js');
const Location = require('../models/Location.js');
const Notification = require('../models/Notifications.js');
const Rating = require('../models/Ratings.js');
const User = require('../models/User.js');

module.exports = {
  addLocation: function(req, res) {
    let testLocation = new Location({
      name: 'test3',
      users: ['5b5f6a9c2955432cc62320c2', '5b5f92208f35d6019c15d32f'],
      clientId: '5b5fb6d7aa10fd0dfc56dec0',
      ratings: ['5b5fcb227fa89413e854a8b5', '5b5fcaf75534e313ba62f451'],
      address: {
        street: '1234 s street ln',
        city: 'city, UT 12345',
        country: 'USA',
      },
      Facebook: true,
      Google_Analytics: true,
      Google_My_Business: true,
      Infusion_soft: true,
      Twitter: true,
      You_Tube: true,
      Linkedin: true,
    });
    testLocation.save(function(err, testLocation) {
      if (err) return console.error(err);
    });
  },
  addRatings: function(req, res) {
    let testRating = new Rating({
      Location_id: '5b5fafba3dbbc80c04d46294',
      comments: 'great job!',
      stars: 4,
      clientId: '5b5fb6d7aa10fd0dfc56dec0',
    });
    testRating.save(function(err, testRating) {
      if (err) return console.error(err);
    });
  },
  addNotifications: function(req, res) {
    let testNotification = new Notification({
      title: 'newMessage',
      Location_id: '5b5fafba3dbbc80c04d46294',
      clientId: '5b5fb6d7aa10fd0dfc56dec0',
    });
    testNotification.save(function(err, testNotification) {
      if (err) return console.error(err);
    });
  },
  addClient: function(req, res) {
    let testClient = new Client({
      name: 'Test Client 2',
      locations: ['5b5fafba3dbbc80c04d46294'],
      image: 'test.jpeg',
    });
    testClient.save(function(err, testClient) {
      if (err) return console.error(err);
    });
  },
};
