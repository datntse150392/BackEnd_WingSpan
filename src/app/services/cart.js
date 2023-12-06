const cartSchema = require("../models/cart.model");

module.exports = {
  getCartItems: async ({ userId }) =>
    new Promise(async (resolve, reject) => {
      try {
        const cartItems = await cartSchema.findOne({ userId: userId });

        if (!cartItems) {
          resolve({
            status: 404,
            message: "Not Found",
          });
        }

        resolve({
          status: 200,
          data: { cartItems },
        });
      } catch (error) {
        reject(error);
      }
    }),
};
