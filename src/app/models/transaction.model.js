const mongoose = require("mongoose");

/**
 * @constructor TransactionSchema
 */
const transactionSchema = new mongoose.Schema({
  _id: {
    type: Object,
  },
  userId: {
    type: String,
  },
  items: {
    type: Array,
  },
  count: {
    type: Number,
  },
  amout: {
    type: Number,
  },
  payer: {
    type: String,
  },
  transactionType: {
    type: String,
  },
  transactionDate: {
    type: Date,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("transaction", transactionSchema);
