const transactionService = require("../services/transaction-service/transaction");
const { transactionJoiSchema } = require("../helpers/joiSchema");
const {
  badRequest,
  interalServerError,
} = require("../middlewares/handleError");
module.exports = {
  /**
   * Function to handle processing payment and saving transaction
   */
  processPaymentAndSaveTransaction: async (req, res) => {
    try {
      const { error } = transactionJoiSchema.validate(req.body);
      if (error) {
        return badRequest(error, res);
      }

      const response =
        await transactionService.processPaymentAndSaveTransaction(req.body);
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  /**
   * Function to handle retrieving transaction by userId
   */
  getTransaction: async (req, res) => {
    try {
      const { userId } = req.body;

      if (!userId) {
        return res.status(404).json({
          message: "User is required",
        });
      }

      // Logic to retrieve transaction by userId
      const response = await transactionService.getTransaction(userId);
      return res.status(200).json(response);
    } catch (error) {
      return interalServerError(error);
    }
  },

  /**
   * Function to handle retrieving detail transaction by transactionId
   */
  getDetailTransaction: async (req, res) => {
    try {
      const { transactionId } = req.body;
      if (!transactionId) {
        return res.status(404).json({
          message: "Transaction is required",
        });
      }

      const response = await transactionService.getDetailTransaction(
        transactionId
      );

      return res.status(200).json(response);
    } catch (error) {
      return interalServerError(error);
    }
  },
};
