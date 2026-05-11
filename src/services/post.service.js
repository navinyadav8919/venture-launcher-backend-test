const generateId = require("../utils/generateId");
const { postValidator } = require("../validators");
const {
  founderRepository,
  postRepository,
} = require("../repositories");

const createPost = (data) => {
  // Validate input
  postValidator.validatePost(data);

  // Check if founder exists
  const founder = founderRepository.findById(data.founderId);

  if (!founder) {
    throw new Error("Founder not found");
  }

  // Create post object
  const post = {
    id: generateId("post"),
    founderId: data.founderId,
    content: data.content.trim(),
    createdAt: new Date().toISOString(),
  };

  // Save and return
  return postRepository.create(post);
};

const getAllPosts = (founderId) => {
  if (founderId) {
    return postRepository.findByFounderId(founderId);
  }

  return postRepository.findAll();
};

module.exports = {
  createPost,
  getAllPosts,
};