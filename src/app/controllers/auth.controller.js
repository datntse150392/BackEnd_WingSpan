const userSchema = require("../models/user.model");
const servies = require("../services/auth");
const { userJoiSchema } = require("../helpers/joiSchema");
const {
  badRequest,
  interalServerError,
} = require("../middlewares/handleError");
module.exports = {
  /**
   *  Đăng nhập tài khoản vào hệ thống
   */
  signIn: async (req, res) => {
    try {
      // Validate the user data against the Joi schema
      const { error } = userJoiSchema.validate(req.body);
      if (error) {
        return badRequest(error, res);
      }

      const response = await servies.signIn(req.body);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  /**
   * Sign up a new user account.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {void}
   * @throws {Error} If there's an issue with the sign-up process.
   */
  signUp: async (req, res) => {
    try {
      // Validate the user data against the Joi schema
      const { error } = userJoiSchema.validate(req.body);
      if (error) {
        return badRequest(error, res);
      }

      // Call the function check user is contains in the system
      const { email } = req.body;
      const user = await userSchema.findOne({ email });
      if (user) {
        return badRequest("The user is contained in the system", res);
      } else {
        const response = await servies.signUp(req.body);
        return res.status(200).json(response);
      }
    } catch (error) {
      console.log(error);
      return interalServerError(res);
    }
  },

  loginAccount: async (req, res) => {
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
   * Is check the user is contained in the system ?
   * @param {email}
   * @return {boolean}
   * @throws {Error} If there's an issue with the sign-up process.
   */
  isCheckUser: async (email) => {
    const user = await userSchema.findOne({ email });
    return user ? true : false;
  },

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
