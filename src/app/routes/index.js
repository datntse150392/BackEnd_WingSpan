const userRouter = require("./users.router");
const courseRouter = require("./course.router");
const billboardRouter = require("./billboard.router");
const authRouter = require("./auth.router");
const cartRouter = require("./cart.router");
const transactionRouter = require("./transaction.router");
const codeRouter = require("./code.router");
const voucherRouter = require("./voucher.router");
const newFeedRouter = require("./newFeed.router");
const blogRouter = require("./blog.router");

const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/course", courseRouter);
  app.use("/api/billboard", billboardRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/transaction", transactionRouter);
  app.use("/api/code", codeRouter);
  app.use("/api/voucher", voucherRouter);
  app.use("/api/newFeed", newFeedRouter);
  app.use("/api/blog", blogRouter);
};

module.exports = initRoutes;
