const videoSchema = require("../models/video.model");

module.exports = {
  /**
   * Service Func Get Videos
   */
  getVideos: async () =>
    new Promise(async (resolve, reject) => {
      try {
        const videos = await videoSchema.find();
        resolve({
          status: 200,
          message: "Get videos successfully",
          data: { videos },
        });
      } catch (error) {
        reject(error);
      }
    }),
};
