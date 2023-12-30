const newFeedService = require("../services/newFeed-service/newFeed");
const { badRequest } = require("../middlewares/handleError");

module.exports = {
  /**
   * Handle Logic Controller
   */
  getNewFeeds: async (req, res) => {
    try {
      const response = await newFeedService.getNewFeeds();
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
