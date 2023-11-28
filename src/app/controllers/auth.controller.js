const userSchema = require("../models/user.model");

module.exports = {
  /**
   *  Đăng nhập tài  khoản vào hệ thống
   */
  loginAccount: async (req, res, next) => {
    const { username, password } = req.body;

    try {
      // *Tìm người dùng trong MongoDB, chọn không lấy trường password
      const user = await userSchema.findOne(
        { username, password },
        { password: 0 }
      );
      if (user) {
        res.status(200).json({
          status: 200,
          message: "Login successfull",
          data: { user },
        });
      } else {
        res.status(401).json({
          status: 401,
          message: "Authentication failed",
        });
      }
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  },
};
