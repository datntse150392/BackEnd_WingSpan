const codeSchema = require("../models/code.model");
const userSchema = require("../models/user.model");
const courseSchema = require("../models/course.model");

module.exports = {
  activeCourse: async ({ code, userId }) =>
    new Promise(async (resolve, reject) => {
      try {
        // Check if has already user
        const user = await userSchema.findById(userId);

        if (!user) {
          resolve({
            status: 404,
            message: "Not Found User",
          });
        }

        // Check if has already code
        const codeItem = await codeSchema.findOne({ code: code });
        if (!codeItem) {
          resolve({
            status: 404,
            message: "Not Found Code",
          });
        }

        // Check if has already course
        const course = await courseSchema.findById(codeItem.courseId);
        if (!course) {
          resolve({
            status: 404,
            message: "Not Found Course",
          });
        } else {
          // Check if has already course
          if (codeItem.status === "Actived") {
            resolve({
              status: 400,
              message: "Code was Actived",
            });
          } else {
            if (
              user.enrolledCourses.some((item) => {
                console.log(String(item._id));
                console.log(codeItem.courseId);

                return item._id == codeItem.courseId;
              })
            ) {
              resolve({
                status: 400,
                message: "Course was enrollmenteded",
              });
            } else {
              user.enrolledCourses.push({
                ...course.toObject(),
                enrollmentDate: new Date().toDateString(),
              });

              // Increment enrollment count in the course
              course.enrollmentCount++;

              // Change status code
              codeItem.status = "Actived";

              // Save both user and course
              await Promise.all([user.save(), course.save(), codeItem.save()]);

              // Successfully saved user and course
              console.log("Enrollment successful.");

              resolve({
                status: 200,
                message: "Enrollment successful.",
              });
            }
          }
        }
      } catch (error) {
        reject(error);
      }
    }),
};
