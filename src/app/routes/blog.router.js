const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const {
  createBlog,
  getBlogs,
  getBlogById,
  deleteBlogByBlogId,
} = require("../controllers/blog-controller");

/**
 * Public Route
 */
router.get("/getBlogs", getBlogs);
router.post("/getBlogById", getBlogById);
/**
 * Private Route
 */
router.use(verifyToken);
router.post("/createBlog", createBlog);
router.delete("deleteBlogByBlogId", deleteBlogByBlogId);
module.exports = router;
