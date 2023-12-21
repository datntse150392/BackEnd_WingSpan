const voucherService = require("../services/voucher");
const { interalServerError } = require("../middlewares/handleError");

module.exports = {
  /**
   * Handler Get All Vouchers with type normal
   */
  getAllVouchers: async ({ res }) => {
    try {
      const response = await voucherService.getAllVouchers();
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, you might want to send an error response
      interalServerError(error);
    }
  },
};
