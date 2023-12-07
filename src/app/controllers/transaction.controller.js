const transactionService = require("../services/transaction");
const { transactionJoiSchema } = require("../helpers/joiSchema");
const {
  badRequest,
  interalServerError,
} = require("../middlewares/handleError");
module.exports = {
  /**
   * Logic code handle processPaymentAndSaveTransaction
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
};
