const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const { getCartItems } = require("../controllers/cart.controller");

/**
 * Public Router
 */

/**
 * Private Router
 */
router.use(verifyToken);
router.post("", getCartItems);
module.exports = router;
