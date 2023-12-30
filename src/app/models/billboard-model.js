const mongoose = require("mongoose");

const billboardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  buttonDes: {
    type: String,
  },
  rightImg: {
    type: String,
  },
  bgColor: {
    type: String,
  },
});

module.exports = mongoose.model("billboard", billboardSchema);
