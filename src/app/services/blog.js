const blogSchema = require("../models/blog.model");

// UUID4
const { v4: uuidv4 } = require("uuid");

module.exports = {
  /**
   * Service Func Get All Blog
   */
  getBlogs: async () =>
    new Promise(async (resolve, reject) => {
      try {
        const blogs = await blogSchema.find();
        resolve({
          status: 200,
          data: { blogs },
        });
      } catch (error) {
        reject(error);
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
