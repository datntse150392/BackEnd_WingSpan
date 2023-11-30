const userModel = require("../models/user.model");

module.exports = {
  /**
   *  get all account
   */
  getUsers: async (req, res, next) => {
    const accounts = await userModel.find({});
    return res.status(200).json(accounts);
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
};
