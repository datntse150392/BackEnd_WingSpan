const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  username: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
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
