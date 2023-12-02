const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  updateInfo,
} = require("../controllers/users.controller");
/*
  GET
*/
router.get("/getAllUsers", getUsers);
router.post("/getUser", getUser);

/*
  PUT
*/
router.put("/updateInfo", updateInfo);

module.exports = router;
