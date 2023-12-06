const mongoose = require("mongoose");

/**
 * @constructor CartSchema
 */
const cartSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("cart", cartSchema);
