const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
  },
  maxUses: {
    type: Number,
  },
  discount: {
    type: Number,
    required: true,
  },
  usedCount: {
    type: Number,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("voucher", voucherSchema);
