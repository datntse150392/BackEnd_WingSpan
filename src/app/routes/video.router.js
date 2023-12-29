const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const { getVideos } = require("../controllers/video.controller");

/**
 * Public Route
 */
router.get("/getVideos", getVideos);
/**
 * Private Route
 */
module.exports = router;
