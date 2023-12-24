const mongoose = require("mongoose");

/**
 * @constructor newFeedSchema
 */
const newFeedSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  footer: {
    type: String,
  },
  postDate: {
    type: Date,
  },
  author: {
    type: Object,
  },
  priority: {
    type: String,
  },
});

module.exports = mongoose.model("newfeed", newFeedSchema);
