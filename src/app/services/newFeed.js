const newFeedSchema = require("../models/newFeed.model");
// UUID4
const { v4: uuidv4 } = require("uuid");

/**
 * Handle Logic Service
 */
module.exports = {
  getNewFeeds: () =>
    new Promise(async (resolve, reject) => {
      try {
        const newFeeds = await newFeedSchema.find({});
        resolve({
          status: 200,
          message: "Get new feeds successfully",
          data: { newFeeds },
        });
      } catch (error) {
        reject(error);
      }
    }),
};
