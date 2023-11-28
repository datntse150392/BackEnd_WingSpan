const express = require("express");
const router = express.Router();
const { loginAccount } = require("../controllers/auth.controller");
router.post("/signin", loginAccount);
module.exports = router;
