const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/users.controller");

router.get("/getAllUsers", getUsers);

module.exports = router;
