const courseSchema = require("../models/course.model");

module.exports = {
  /**
   *  Lấy tất cả danh sách khóa học
   */
  getCourses: async (req, res, next) => {
    const courses = await courseSchema.find({});
    return res.status(200).json({
      status: 200,
      data: courses,
    });
  },

  /**
   *  Lấy khóa học theo id khóa học
   */
  getCourseById: async (req, res, next) => {
    const courseId = req.params.id; // Assuming your route is defined as '/courses/:id'
    try {
      const course = await courseSchema.findById(courseId);
      if (!course) {
        return res
          .status(404)
          .json({ status: 404, message: "Course not found" });
      }
      res.status(200).json({
        status: 200,
        data: course,
      });
    } catch (error) {
      console.error("Error fetching course by ID:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
