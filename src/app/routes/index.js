const userRouter = require("./users.router");
const courseRouter = require("./course.router");
module.exports = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/course", courseRouter);
};
