const { posts } = require("../data/store");

/**
 * Save a new post to the in-memory store
 * @param {Object} post
 * @returns {Object}
 */
const create = (post) => {
  posts.push(post);
  return post;
};

/**
 * Return all posts
 * @returns {Array}
 */
const findAll = () => {
  return posts;
};

/**
 * Return posts for a specific founder
 * @param {string} founderId
 * @returns {Array}
 */
const findByFounderId = (founderId) => {
  return posts.filter((post) => post.founderId === founderId);
};

module.exports = {
  create,
  findAll,
  findByFounderId,
};