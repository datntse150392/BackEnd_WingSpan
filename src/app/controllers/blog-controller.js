const blogService = require("../services/blog-service/blog");
const { blogJoiSchema } = require("../helpers/joiSchema");
const { badRequest } = require("../middlewares/handleError");

module.exports = {
  /**
   * Logic code - Get All Blog
   */
  getBlogs: async (req, res) => {
    try {
      const response = await blogService.getBlogs(req.query);
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

  /**
   * Logic code - Get Deail Blog
   */
  getBlogById: async (req, res) => {
    try {
      const { blogId } = req.body;
      console.log(blogId);
      if (!blogId) {
        return res.status(404).json({
          status: 404,
          message: "Not Found Blog Id",
          data: null,
        });
      }
      const response = await blogService.getBlogById(blogId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  /**
   * Logic Controller : Delete Blog By Blog-Id
   */
  deleteBlogByBlogId: async (req, res) => {
    try {
      const { blogId } = req.body;
      if (!blogId) {
        return res.status(404).json({
          status: 404,
          message: "Not Found Blog Id",
          data: null,
        });
      }

      const response = await blogService.deleteBlogById(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
};
