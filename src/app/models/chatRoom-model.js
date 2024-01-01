const mongoose = require("mongoose");

const chatRoomSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
  studentCount: {
    type: Number,
    default: 0,
  },
  user: {
    type: Array,
    default: [],
  },
  thumbnail: {
    type: String,
    default: null,
  },
  messages: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("chatRoom", chatRoomSchema);
