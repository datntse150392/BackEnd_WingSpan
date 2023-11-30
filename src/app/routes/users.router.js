const express = require("express");
const router = express.Router();
const { getUsers, getUser } = require("../controllers/users.controller");

router.get("/getAllUsers", getUsers);
router.post("/getUser", getUser);

module.exports = router;
