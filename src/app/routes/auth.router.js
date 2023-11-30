const express = require("express");
const router = express.Router();
const {
  loginAccount,
  registerAccount,
  isCheckAccount,
} = require("../controllers/auth.controller");

router.post("/signin", loginAccount);
router.post("/signup", registerAccount);
router.post("/isCheckAccount", isCheckAccount);

module.exports = router;
