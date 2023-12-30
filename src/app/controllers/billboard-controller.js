const billboardSchema = require("../models/billboard-model");
module.exports = {
  /**
   *  Lấy tất cả danh sách khóa học
   */
  getBillboards: async (req, res, next) => {
    const billboard = await billboardSchema.find({});
    return res.status(200).json({
      status: 200,
      data: billboard,
    });
  },
};
