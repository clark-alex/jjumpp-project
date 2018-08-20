const Client = require('../models/Client.js');
const Location = require('../models/Location.js');
const Notification = require('../models/Notifications.js');
const Rating = require('../models/Ratings.js');
const User = require('../models/User.js');

module.exports = {
  addLocation(req, res) {
    const testLocation = new Location({
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
      googleMyBusiness: true,
      Infusion_soft: true,
      Twitter: true,
      youTube: true,
      Linkedin: true,
    });
    testLocation.save(err => {
      if (err) return console.error(err);
    });
  },
  addRatings(req, res) {
    const testRating = new Rating({
      Location_id: '5b5fafba3dbbc80c04d46294',
      comments: 'great job!',
      stars: 4,
      clientId: '5b5fb6d7aa10fd0dfc56dec0',
    });
    testRating.save(err => {
      if (err) return console.error(err);
    });
  },
  addNotifications(req, res) {
    const testNotification = new Notification({
      title: 'newMessage',
      Location_id: '5b5fafba3dbbc80c04d46294',
      clientId: '5b5fb6d7aa10fd0dfc56dec0',
    });
    testNotification.save(err => {
      if (err) return console.error(err);
    });
  },
  addClient(req, res) {
    const testClient = new Client({
      name: 'Test Client 2',
      locations: ['5b5fafba3dbbc80c04d46294'],
      image: 'test.jpeg',
    });
    testClient.save(err => {
      if (err) return console.error(err);
    });
  },
};
