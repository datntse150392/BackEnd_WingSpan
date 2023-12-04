const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const {
  getCourses,
  getCourseById,
  registerCourse,
} = require("../controllers/course.controller");

/**
 * Public Router
 */
router.get("/getAllCourses", getCourses);

/**
 * Private Router
 */
router.use(verifyToken);
router.get("/:id", getCourseById);
router.post("/enrollmentCourse", registerCourse);
module.exports = router;
