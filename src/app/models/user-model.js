const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: String },
  email: {
    type: String,
    unique: true,
  },
  fullName: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  enrolledCourses: {
    type: Array,
  },
  createAt: {
    type: String,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  is_teacher: {
    type: Boolean,
    default: false,
  },
  is_comment_blocked: {
    type: Boolean,
    default: false,
  },
  is_blocked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", userSchema);
