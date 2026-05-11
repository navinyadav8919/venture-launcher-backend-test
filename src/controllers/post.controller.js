const { postService } = require("../services");

const createPost = (req, res) => {
  try {
    const post = postService.createPost(req.body);

    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (error) {
    const statusCode =
      error.message === "Founder not found" ? 404 : 400;

    return res.status(statusCode).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllPosts = (req, res) => {
  try {
    const { founderId } = req.query;
    const posts = postService.getAllPosts(founderId);

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};