const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  fullName: {
    type: String,
  },
  email: { type: String, unique: true },
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
