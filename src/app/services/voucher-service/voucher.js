const voucherSchema = require("../../models/voucher-model");

module.exports = {
  /**
   * Logic service API: Get All Vouchers
   */
  getAllVouchers: () =>
    new Promise(async (resolve, reject) => {
      try {
        // Find all vouchers
        const vouchers = await voucherSchema.find({ type: "normal" });

        resolve({
          status: 200,
          message: "Get All Vouchers Successfully",
          data: { vouchers },
        });
      } catch (error) {
        reject(error);
      }
    }),
};
