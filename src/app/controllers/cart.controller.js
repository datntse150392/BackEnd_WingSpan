const cartService = require("../services/cart");
const { cartJoiSchema } = require("../helpers/joiSchema");
const {
  badRequest,
  interalServerError,
} = require("../middlewares/handleError");

module.exports = {
  /**
   * Logic code - Get All Cart Items
   */
  getCartItems: async (req, res) => {
    try {
      // Validate the data
      const { error } = cartJoiSchema.validate(req.body);
      if (error) {
        return badRequest(error, res);
      }

      const response = await cartService.getCartItems(req.body);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
};
