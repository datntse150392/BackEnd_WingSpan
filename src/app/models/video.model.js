const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: String,
  },
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 0,
  },
  yt_view_count: {
    type: Number,
    default: 0,
  },
  yt_comment_count: {
    type: Number,
    default: 0,
  },
  yt_like_count: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("video", videoSchema);
