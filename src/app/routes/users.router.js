const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getUsers,
  getUser,
  getUserbyEmail,
  updateInfo,
} = require("../controllers/users.controller");

/*
  PUBLIC ROUTES
*/
router.get("/getAllUsers", getUsers);
router.post("/getUser", getUser);
router.post("/getUserByEmail", getUserbyEmail);

/*
  PRIVATE ROUTES
*/
console.log(verifyToken);
router.put("/updateInfo", updateInfo);

module.exports = router;
