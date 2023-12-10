const cartService = require("../services/cart");
const {
  cartJoiSchema,
  addToCartJoiSchema,
  deleteCartJoiSchema,
} = require("../helpers/joiSchema");
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
      console.log(error);
      return interalServerError();
    }
  },

  /**
   * Logic code: Add to cart
   */
  addToCart: async (req, res) => {
    try {
      // Check validate params
      const { error } = addToCartJoiSchema.validate(req.body);
      if (error) {
        return badRequest(error, res);
      }

      const response = await cartService.addToCart(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  /**
   * Logic code: Delete cart by cartId
   */
  deleteCartItem: async (req, res) => {
    try {
      const { error } = deleteCartJoiSchema.validate(req.body);
      if (error) {
        return badRequest(error, res);
      }

      const response = await cartService.deleteCartItem(req.body);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return interalServerError();
    }
  },
};
