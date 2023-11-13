const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ntdat2001dt:mLD0N9WoSPrGoUAG@cluster0.erglvxo.mongodb.net/OngButDiCode?retryWrites=true&w=majority"
    );
    console.log("kết nối db thành công");
  } catch (error) {
    console.log("lỗi kết nối db: " + error.message);
  }
};
