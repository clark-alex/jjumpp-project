const client = require('../models/Client.js')
const location = require('../models/Location.js')
const notification = require('../models/Notifications.js')
const rating = require('../models/Ratings.js')
const user = require('../models/User.js')

//simulating a logged in user
const session = {user:'5b5f6a9c2955432cc62320c2', client_id:'5b5fb6d7aa10fd0dfc56dec0' }
module.exports = {
    getUsersByLocation: function (req, res) {
        const { id } = req.params;
        user.find({ client_id: id }, function (err, users) {
            if (err) return console.error(err);
        }).then((users) => res.status(200).send(users))
    },
    getLoggedin: function (req, res) {
        // just a simulation
        user.findById(session.user, function (err, user) {
            if (err) return console.error(err);
        }).then((user) => res.status(200).send(user))
    },
    getLocationByClient: function (req, res) {
        const { id } = req.params;
        location.find({ client_id: id }, function (err, location) {
            if (err) return console.error(err);
        }).then((locations) => res.status(200).send(locations))
    },
    // I chose to get notifications,ratings and users by client, so that I dont have to do an HTTP
    // request on each location component. 
    getNotificationByClient: function (req, res) {
        const { id } = req.params;
        notification.find({ client_id: id }, function (err, notification) {
            if (err) return console.error(err);
        }).then((notification) => res.status(200).send(notification))
    },
    getRatingsByClient: function (req, res) {
        rating.find({ client_id: session.client_id }, function (err, rating) {
            if (err) return console.error(err);
        }).then((rating) => res.status(200).send(rating))
    },
    addLocation: function (req, res) {
        const {name, address, Facebook, Google_anaylytics, Google_My_Business, Infusion_Soft,Twitter,You_Tube, Linkedin} = req.body
        const newLocationinfo =  {
            name,
            "address": {street:address.street,city:address.city,country:address.country},
            Facebook,
            Google_anaylytics,
            Google_My_Business,
            Infusion_Soft,
            Twitter,
            You_Tube,
            Linkedin
        }
        console.log(newLocationinfo)
        const newLocation = new location({
            name,
            "address": {street:address.street,city:address.city,country:address.country},
            Facebook,
            Google_anaylytics,
            Google_My_Business,
            Infusion_Soft,
            Twitter,
            You_Tube,
            Linkedin,
            client_id:session.client_id,
            notifications:0,
            avg_rating:0,
            
        })
        newLocation.save(function (err, newLocation) {
            if (err) return console.error(err);
            res.status(200).send(newLocation)
        })
    },
}