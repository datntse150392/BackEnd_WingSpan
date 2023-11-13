const courseSchema = require("../models/course.model");

module.exports = {
  /**
   *  get all account
   */
  getCourses: async (req, res, next) => {
    const courses = await courseSchema.find({});
    return res.status(200).json({
      status: 200,
      data: courses,
    });
  },
};
