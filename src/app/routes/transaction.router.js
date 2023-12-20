const express = require("express");
const router = express.Router();
const {
  processPaymentAndSaveTransaction,
  getTransaction,
  getDetailTransaction,
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
router.post("/getTransaction", getTransaction);
router.post("/getDetailTransaction", getDetailTransaction);

module.exports = router;
