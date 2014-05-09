var mongoose = require('mongoose');

mongoose.connect(global.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', global.db, err.message);
    process.exit(1);
  }
});

// models
require('./reply');
require('./message');
require('./comment');
require('./user');

require('./country');
require('./city');
require('./area');

require('./spot');
require('./eat');
require('./shop');
require('./category');

require('./plan');



exports.Reply = mongoose.model('Reply');
exports.Message = mongoose.model('Message');
exports.Comment = mongoose.model('Comment');
exports.User = mongoose.model('User');

exports.Country = mongoose.model('Country');
exports.City = mongoose.model('City');
exports.Area = mongoose.model('Area');

exports.Spot = mongoose.model('Spot');
exports.Eat = mongoose.model('Eat');
exports.Shop = mongoose.model('Shop');
exports.Category = mongoose.model('Category');

exports.Plan = mongoose.model('Plan');
