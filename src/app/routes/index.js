const userRouter = require("./users.router");
const courseRouter = require("./course.router");
const billboardRouter = require("./billboard.router");
const authRouter = require("./auth.router");

const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/course", courseRouter);
  app.use("/api/billboard", billboardRouter);
  app.use("/api/auth", authRouter);
};

module.exports = initRoutes;
