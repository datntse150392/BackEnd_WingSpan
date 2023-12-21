const express = require("express");
const router = express.Router();
const { getAllVouchers } = require("../controllers/voucher.controller");
const { verifyToken } = require("../middlewares/verifyToken");

/*
  PUBLIC ROUTES
*/

/*
  PRIVATE ROUTES
*/
router.use(verifyToken);
router.get("/getAllVouchers", getAllVouchers);

module.exports = router;
