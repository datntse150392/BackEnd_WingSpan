const videoService = require("../services/video-service/video");
const {
  badRequest,
  interalServerError,
} = require("../middlewares/handleError");

module.exports = {
  /**
   * Logic code - Get Videos
   */
  getVideos: async (req, res) => {
    try {
      const response = await videoService.getVideos();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
};
