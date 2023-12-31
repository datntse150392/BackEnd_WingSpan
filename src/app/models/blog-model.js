const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Array,
    default: [],
  },
  status: {
    type: Boolean,
    default: true,
  },
  is_approved: {
    type: Boolean,
    default: false,
  },
  is_bookmark: {
    type: Boolean,
    default: false,
  },
  // Admin will seting 3 field below
  thumbnail: {
    type: String,
    default: null,
  },
  min_read: {
    type: Number,
    default: 0,
  },
  tags: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("blog", blogSchema);
