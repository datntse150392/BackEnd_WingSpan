const express = require("express");
const router = express.Router();

const { getNewFeeds } = require("../controllers/newFeed.controller");

router.get("/getNewFeeds", getNewFeeds);
module.exports = router;
