const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("code", codeSchema);
