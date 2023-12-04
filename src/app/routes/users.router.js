const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  getUserbyEmail,
  updateInfo,
} = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/verifyToken");

/*
  PUBLIC ROUTES
*/
router.get("/getAllUsers", getUsers);
router.post("/getUser", getUser);
router.post("/getUserByEmail", getUserbyEmail);

/*
  PRIVATE ROUTES
*/
router.use(verifyToken);
router.put("/updateInfo", updateInfo);

module.exports = router;
