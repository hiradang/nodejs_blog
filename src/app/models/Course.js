const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, required: true},
  description: {type: String, maxLength: 1000},
  image: {type: String},
  videoID: {type: String, required: true},
  level: {type: String},
  slug: {type: String, slug:"name", require: true},
}, {
  timestamps: true,
});

// Add plugins 
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { 
    overrideMethods: 'all',
    deletedAt : true, 
  });

module.exports = mongoose.model('Course', Course);