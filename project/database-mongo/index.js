var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

db.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  db.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

var itemSchema = mongoose.Schema({
  name: String,
  address: {type: String, required: true, unique: true, dropDups: true},
  rating: Number
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.Item = Item;
