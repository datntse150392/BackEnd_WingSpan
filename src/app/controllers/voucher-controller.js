const voucherService = require("../services/voucher-service/voucher");
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

  /**
   * Handler Get Service
   */
  getVoucherByCode: async (req, res) => {
    try {
      const response = await voucherService.getVoucherByCode(req.body);
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, you might want to send an error response
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        data: error.message,
      });
    }
  },
};
