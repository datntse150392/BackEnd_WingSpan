const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const { activeCourse } = require("../controllers/code.controller");

/**
 * Public Router
 */

/**
 * Private Router
 */
router.use(verifyToken);
router.post("/activeCourse", activeCourse);
module.exports = router;
