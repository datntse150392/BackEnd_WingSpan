const mongoose = require("mongoose");

/**
 * @constructor TransactionSchema
 */
const transactionSchema = new mongoose.Schema({
  _id: {
    type: Object,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  count: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  payer: {
    type: Object,
    required: true,
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
