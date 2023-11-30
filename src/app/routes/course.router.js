const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourseById,
  registerCourse,
} = require("../controllers/course.controller");

router.get("/getAllCourses", getCourses);
router.get("/:id", getCourseById);
router.post("/enrollmentCourse", registerCourse);
module.exports = router;
