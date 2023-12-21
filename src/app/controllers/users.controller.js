const userModel = require("../models/user.model");
const services = require("../services/user");
const { interalServerError } = require("../middlewares/handleError");
module.exports = {
  /**
   * Logic code handle get all user account of the system
   * @param {*} res
   * @returns
   */
  getUsers: async (res) => {
    const accounts = await userModel.find({});
    return res.status(200).json(accounts);
  },

  /**
   * Logic code handle get User by userId
   * @param {*} req
   * @param {*} res
   * @returns
   */
  getUserbyUserId: async (req, res) => {
    try {
      const response = await services.getUserByUserId(req.body);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      interalServerError(error);
    }
  },

  /**
   *  Get User by userName
   */
  getUser: async (req, res) => {
    const { userName } = req.body;
    try {
      const user = await userModel.findOne(userName);
      if (user) {
        return res.status(200).json({
          status: 200,
          message: "User Founded",
          data: { user },
        });
      }
      return res.status(404).json({
        status: 404,
        message: "Not Found",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  },

  /**
   *  Get User by email
   */
  getUserbyEmail: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        return res.status(200).json({
          status: 200,
          message: "User Founded",
          data: { userInfo: user },
        });
      }
      return res.status(404).json({
        status: 404,
        message: "Not Found",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  },
  /**
   *  Update a user by email
   */
  updateInfo: async (req, res) => {
    const { email, fullName } = req.body;

    try {
      if (!email) {
        return res.status(400).json({
          status: 400,
          message: "Email is required",
        });
      }

      const user = await userModel.findOneAndUpdate(
        { email: email },
        { fullName: fullName },
        { new: true }
      );

      if (!user) {
        res.status(404).json({
          status: 404,
          message: "User not found",
        });
      }

      return res.status(200).json({
        status: 200,
        message: "User updated successfully",
        data: { userInfo: user },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  },
};
