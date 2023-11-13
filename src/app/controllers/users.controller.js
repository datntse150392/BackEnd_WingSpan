const userModel = require("../models/user.model");

module.exports = {
  /**
   *  get all account
   */
  getUsers: async (req, res, next) => {
    const accounts = await userModel.find({});
    return res.status(200).json(accounts);
  },
};
