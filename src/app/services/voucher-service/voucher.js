const voucherSchema = require("../../models/voucher-model");

module.exports = {
  /**
   * Logic service API: Get All Vouchers
   */
  getAllVouchers: () =>
    new Promise(async (resolve, reject) => {
      try {
        const now = new Date();
        // Find vouchers with expirationDate > now
        const vouchers = await voucherSchema.find({
          type: "normal",
          expirationDate: { $gt: now },
        });

        resolve({
          status: 200,
          message: "Get All Vouchers Successfully",
          data: { vouchers },
        });
      } catch (error) {
        reject(error);
      }
    }),

  /**
   * Logic service API: Get Voucher By Code
   */
  getVoucherByCode: ({ code }) =>
    new Promise(async (resolve, reject) => {
      try {
        const voucher = await voucherSchema.findOne({ code: code });
        if (!voucher) {
          resolve({
            status: 404,
            message: "Not Found Voucher",
            data: null,
          });
        }

        // Check if voucher was expired
        const date = new Date();
        if (new Date(voucher.expirationDate) < date) {
          resolve({
            status: 400,
            message: "Voucher was expired",
            data: null,
          });
        }

        resolve({
          status: 200,
          message: "Get Voucher By Code Successfully",
          data: voucher,
        });
      } catch (error) {
        reject(error);
      }
    }),
};
