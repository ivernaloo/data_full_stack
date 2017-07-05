var mongoose = require('mongoose');
mongoose.connect('mongodb://orc:27017/hospital');

var Hospital = require('./models/hospital');
var Community = require('./models/community');

module.exports = {
  hospital: Hospital,
  community: Community
};