const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourseById,
} = require("../controllers/course.controller");

router.get("/getAllCourses", getCourses);
router.get("/:id", getCourseById);
module.exports = router;
