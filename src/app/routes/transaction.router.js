const express = require("express");
const router = express.Router();
const {
  processPaymentAndSaveTransaction,
  getTransaction,
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
router.get("/getTransaction", getTransaction);

module.exports = router;
