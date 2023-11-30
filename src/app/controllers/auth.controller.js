const userSchema = require("../models/user.model");
const bcrypt = require("bcrypt"); // Để sử dụng bcrypt để mã hóa mật khẩu
const { v4: uuidv4 } = require("uuid");
module.exports = {
  /**
   *  Đăng nhập tài khoản vào hệ thống
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

  /**
   *  Đăng ký tài khoản vào hệ thống
   */
  registerAccount: async (req, res) => {
    const { email, username, password } = req.body;

    try {
      // *Kiểm tra xem tên người dùng đã tồn tại chưa
      const existingUser = await userSchema.findOne({ username, password });
      if (!username || !password || !email) {
        return res.status(400).json({
          status: 400,
          message: "Username, password, and email are required",
        });
      }
      if (existingUser) {
        return res.status(400).json({
          status: 400,
          message: "User already exists",
        });
      }
      // // Tạo salt
      // const saltRounds = 10;
      // const salt = await bcrypt.genSalt(saltRounds);

      // // Mã hóa mật khẩu với salt
      // const hashedPassword = await bcrypt.hash(password, salt);

      // *Tạo người dùng mới và lưu vào MongoDB
      const newUser = new userSchema({
        _id: uuidv4(),
        username: req.body.username,
        fullName: "Thành viên WingSpan",
        password: req.body.password ? req.body.password : "123456",
        email: req.body.email,
        profileImage: req.body.profileImage ? req.body.profileImage : "",
        dateOfBirth: "",
        enrolledCourses: [],
      });
      await newUser.save();
      res.status(201).json({
        status: 200,
        message: "Register success",
        data: { user: newUser },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 500, message: error.message });
    }
  },

  /**
   *  Kiểm tra xem người dùng có trong hệ thống không ?
   */
  isCheckAccount: async (req, res) => {
    const { email } = req.body;

    try {
      // *Kiểm tra xem tên người dùng đã tồn tại chưa
      const existingUser = await userSchema.findOne({ email });
      if (!email) {
        return res.status(400).json({
          status: 400,
          message: "Email is required",
        });
      }
      if (existingUser) {
        return res.status(200).json({
          status: 200,
          message: "Founded",
        });
      }
      res.status(200).json({
        status: 200,
        message: "Not Found",
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  },
};
