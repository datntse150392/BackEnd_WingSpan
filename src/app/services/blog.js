const blogSchema = require("../models/blog.model");

// UUID4
const { v4: uuidv4 } = require("uuid");

module.exports = {
  /**
   * Service Func Get All Blog
   */
  getBlogs: async ({ page }) =>
    new Promise(async (resolve, reject) => {
      try {
        // Limit number of blog entries per page
        const limit = 2;
        const offset = !page || +page <= 1 ? 0 : +page - 1;
        // Calculate the number of documents to skip
        const skip = (page - 1) * limit;

        // Count the total number if blogs to assits with front-end pagination
        const total = await blogSchema.countDocuments();

        // Check if current page > total || < 0
        if (page > ~~(total / limit) || page <= 0) {
          resolve({
            status: 400,
            message: "Page invalid",
            data: null,
          });
        }

        // Find the blogs, apply sorting by date, skip and limit for pagination
        const blogs = await blogSchema
          .find()
          .sort({ createdAt: -1 })
          .skip(+skip)
          .limit(limit);

        resolve({
          status: 200,
          message: "Blogs retrieved successfully",
          data: { blogs },
          pageInfo: {
            currentPage: page,
            totalPages: ~~(total / limit),
            totalBlogs: total,
          },
        });
      } catch (error) {
        reject({
          status: 500,
          message: "Error retrieving blogs",
          error: error.message,
        });
      }
    }),

  /**
   * Service Func Create Blog
   */
  createBlog: async ({ title, content, author }) =>
    new Promise(async (resolve, reject) => {
      try {
        const blog = new blogSchema({
          _id: uuidv4(),
          title,
          content,
          author,
        });
        await blog.save();
        resolve({
          status: 200,
          message: "Create blog successful",
        });
      } catch (error) {
        reject(error);
      }
    }),

  /**
   * Serivce Func Get Detail Blog By Id
   */
  getBlogById: async (blogId) =>
    new Promise(async (resolve, reject) => {
      try {
        const blog = await blogSchema.findById(blogId);
        if (!blog) {
          resolve({
            status: 404,
            message: "Not Found",
            data: null,
          });
        }
        resolve({
          status: 200,
          message: "Get blog successful",
          data: { blog },
        });
      } catch (error) {
        reject(error);
      }
    }),
};
