const express = require("express");
const router = express.Router();
const {
  loginAccount,
  registerAccount,
  isCheckAccount,
  signIn,
  signUp,
} = require("../controllers/auth-controller");
router.post("/signIn", signIn);
router.post("/signUp", signUp);
router.post("/isCheckAccount", isCheckAccount);

module.exports = router;
