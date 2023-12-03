const { jwt, TokenExpiredError } = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Require Authorization",
      });
    }
    const access_token = token.split(" ")[1];
    jwt.verify(access_token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        const isExpired = err instanceof TokenExpiredError;
        if (isExpired) {
          return res.status(401).json({
            status: 401,
            message: "Require Authorization",
            isExpired: isExpired,
          });
        }
        if (!isExpired) {
          return res.status(401).json({
            status: 401,
            message: "Require Authorization",
            isExpired: isExpired,
          });
        }
      }
      req.user = user;
      return next(); // Thêm dòng này để gọi middleware tiếp theo
    });
  },
};
