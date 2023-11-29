const express = require("express");
const router = express.Router();
const {
  loginAccount,
  registerAccount,
} = require("../controllers/auth.controller");
router.post("/signin", loginAccount);
router.post("/signup", registerAccount);
module.exports = router;
