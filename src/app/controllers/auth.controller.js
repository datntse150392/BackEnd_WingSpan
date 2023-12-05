const userSchema = require("../models/user.model");
const servies = require("../services/auth");
const {
  userJoiSchema,
  userJoiSchemaForSignUp,
} = require("../helpers/joiSchema");
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
      const { error } = userJoiSchemaForSignUp.validate(req.body);
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
   * Is check the user is contained in the system ?
   * @param {email}
   * @return {boolean}
   * @throws {Error} If there's an issue with the sign-up process.
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
