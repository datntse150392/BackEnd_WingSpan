const express = require("express");
const router = express.Router();
const {
  processPaymentAndSaveTransaction,
} = require("../controllers/transaction.controller");
const { verifyToken } = require("../middlewares/verifyToken");

/*
  PUBLIC ROUTES
*/

/*
  PRIVATE ROUTES
*/
router.use(verifyToken);
router.post(
  "/processPaymentAndSaveTransaction",
  processPaymentAndSaveTransaction
);

module.exports = router;
