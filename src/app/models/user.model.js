const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: Object },
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
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
});

module.exports = mongoose.model("user", userSchema);
