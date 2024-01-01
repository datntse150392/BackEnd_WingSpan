const chatRoomSerivce = require("../services/chatRoom-service");
module.exports = {
  /**
   * Logic code API - Get History Message
   */
  getHistoryMessage: async (req, res) => {
    try {
      const response = await chatRoomSerivce.getHistoryMessage(req.query);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  /**
   * Logic code API - Get Room information
   */
  getRooms: async (req, res) => {
    try {
      const response = await chatRoomSerivce.getRooms();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  /**
   * Logic code API - Save message
   */
  saveMessage: async (req, res) => {
    try {
      console.log(req.body.body);
      const response = await chatRoomSerivce.saveMessage(req.body.body);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
};
