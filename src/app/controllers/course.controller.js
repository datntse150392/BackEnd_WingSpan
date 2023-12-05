const courseSchema = require("../models/course.model");
const userSchema = require("../models/user.model");
module.exports = {
  /**
   *  Get all Courses
   */
  getCourses: async (req, res, next) => {
    const courses = await courseSchema.find({});
    return res.status(200).json({
      status: 200,
      data: courses,
    });
  },

  /**
   *  Get Course by ID Course
   */
  getCourseById: async (req, res) => {
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

  /**
   * @parmas {_id, courseId}
   * Register the Course
   */
  registerCourse: async (req, res) => {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
      return res.status(400).json({
        status: 400,
        message: "UserId && CourseId are required",
      });
    }
    try {
      // Check if the user already enrolled in the course
      const user = await userSchema.findById(userId);

      if (!user) {
        return res.status(404).json({
          status: 404,
          message: "User not found",
        });
      }

      if (user.enrolledCourses.some((course) => course._id == courseId)) {
        // User is already enrolled in the course
        return res.status(400).json({
          status: 400,
          message: "User already enrolled in the course",
        });
      } else {
        const course = await courseSchema.findById(courseId);
        if (!course) {
          return res.status(404).json({
            status: 404,
            message: "Course not found",
          });
        } else {
          // Add the course to enrolledCourses
          user.enrolledCourses.push({
            ...course.toObject(), // Convert Mongoose document to plain JavaScript object
            enrollmentDate: new Date().toDateString(),
          });

          // Increment enrollment count in the course
          course.enrollmentCount++;

          // Save both user and course
          await Promise.all([user.save(), course.save()]);

          // Successfully saved user and course
          console.log("Enrollment successful.");
        }
      }
      res.status(200).json({
        status: 200,
        message: "Enrollment successful.",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 500,
        message: err,
      });
    }
  },
};
