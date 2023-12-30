const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const {
  getCourses,
  getCourseById,
  registerCourse,
} = require("../controllers/course-controller");

/**
 * Public Router
 */
router.get("/getAllCourses", getCourses);
router.get("/:id", getCourseById);

/**
 * Private Router
 */
router.use(verifyToken);
router.post("/enrollmentCourse", registerCourse);
module.exports = router;
