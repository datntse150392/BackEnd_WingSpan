const jwt = require("jsonwebtoken");
const { TokenExpiredError } = require("jsonwebtoken"); // Add this line to import TokenExpiredError
const { notAuth } = require("../middlewares/handleError");
module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return notAuth("Authorization header is missing", res);
    }
    const parts = token.split(" ");
    if (parts.length === 2 && parts[0] === "Bearer") {
      const access_token = parts[1];
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
    } else {
      return notAuth("Require Authorization", res);
    }
  },
};
