const express = require("express");
const router = express.Router();
const { getBillboards } = require("../controllers/billboard-controller");

router.get("/getAllBillboard", getBillboards);
module.exports = router;
