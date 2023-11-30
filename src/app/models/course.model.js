const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  titleDescription: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  subTitleDescription: {
    type: Array,
  },
  mainCourse: {
    type: Array,
  },
  enrollmentCount: {
    type: Number,
  },
  status: {
    type: String,
  },
  type: {
    type: String,
  },
  amount: {
    type: String,
  },
});
module.exports = mongoose.model("course", courseSchema);
