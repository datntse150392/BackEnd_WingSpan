const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const {
  getCartItems,
  addToCart,
  deleteCart,
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
router.delete("/deleteCart", deleteCart);
module.exports = router;
