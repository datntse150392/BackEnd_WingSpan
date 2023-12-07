const transactionSchema = require("../models/transaction.model");
const cartSchema = require("../models/cart.model");

// UUID4
const { v4: uuidv4 } = require("uuid");

/**
 * Hanle Logic Servide
 */
module.exports = {
  processPaymentAndSaveTransaction: ({
    cartId,
    amount,
    payer,
    transactionType,
    status,
  }) =>
    new Promise(async (resolve, reject) => {
      try {
        // Get Cart by CartId
        const cartItem = await cartSchema.findById(cartId);
        if (!cartItem) {
          resolve({
            status: 404,
            message: "Not Found Cart",
            data: null,
          });
        }

        // Create new transaction with new data form request
        const newTransaction = new transactionSchema({
          _id: uuidv4(),
          userId: cartItem.userId,
          items: cartItem.items,
          count: cartItem.count,
          amount: amount,
          payer: payer,
          transactionType: transactionType,
          transactionDate: new Date().toDateString(),
          status: status,
        });

        await newTransaction.save();

        await cartSchema.findByIdAndDelete(cartId);
        resolve({
          status: 200,
          message: "Transaction saved successfully",
          data: { newTransaction },
        });
      } catch (error) {
        reject({
          status: 500,
          message: error.message,
        });
      }
    }),
};
