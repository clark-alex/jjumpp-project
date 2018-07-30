const User = require('../models/User.js')
module.exports = {
    getAllUsers: function (req, res) {
        User.find(function (err, users) {
            if (err) return console.error(err);
            console.log('users',users)
        }).then((users)=>res.status(200).send(users))
    }
}