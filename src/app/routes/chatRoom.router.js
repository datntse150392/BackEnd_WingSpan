const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const {
  getHistoryMessage,
  getRooms,
  saveMessage,
} = require("../controllers/chatRoom-controller");

/**
 * Public Router
 */

router.get("/getHistoryMessage", getHistoryMessage);
router.get("/getRooms", getRooms);
router.post("/saveMessage", saveMessage);

/**
 * Private Router
 */
router.use(verifyToken);
module.exports = router;
