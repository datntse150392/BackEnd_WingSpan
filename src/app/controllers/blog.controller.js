const blogService = require("../services/blog");
const { blogJoiSchema } = require("../helpers/joiSchema");
const {
  badRequest,
  interalServerError,
} = require("../middlewares/handleError");

module.exports = {
  /**
   * Logic code - Get All Blog
   */
  getBlogs: async (req, res) => {
    try {
      const response = await blogService.getBlogs();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  /**
   * Logic code - Create Blog
   */
  createBlog: async (req, res) => {
    try {
      // Validate the request
      const { error } = blogJoiSchema.validate(req.body);

      if (error) {
        return badRequest(error, res);
      }

      const response = await blogService.createBlog(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
};
