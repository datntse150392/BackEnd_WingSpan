const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const {
  getCartItems,
  addToCart,
  deleteCartItem,
} = require("../controllers/cart.controller");

/**
 * Public Router
 */

/**
 * Private Router
 */
router.use(verifyToken);
router.post("", getCartItems);
router.post("/addToCart", addToCart);
router.delete("/deleteCartItem", deleteCartItem);
module.exports = router;
