require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainController')

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

const app = express();
app.use(bodyParser.json());
// ==== Mongoose ====
const mongoDB = CONNECTION_STRING
mongoose.connect(mongoDB, { useNewUrlParser: true })
// mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('connection up and running')
})


// === api endpoints ===
app.get('/api/users',mainCtrl.getAllUsers)
// // Schema test
// // var schema = mongoose.schema;
// var kittySchema = new mongoose.Schema({
//     name: String
// })
// kittySchema.methods.speak = function () {
//     var greeting = this.name
//         ? "Meow name is " + this.name
//         : "I don't have a name";
//     console.log(greeting);
// }
// var Kitten = mongoose.model('Kitten', kittySchema);

// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name);
// var Kitten = mongoose.model('Kitten', kittySchema);
// var fluffy = new Kitten({name:'fluffy'});
// fluffy.speak();


// Kitten.find({name:/^fluff/},function(err, kittens){
//     if (err) return  console.error(err);
//     console.log(kittens);
// })



app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));