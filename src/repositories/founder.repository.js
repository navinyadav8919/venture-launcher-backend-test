const { founders } = require("../data/store");

/**
 * Save a new founder to the in-memory store
 * @param {Object} founder
 * @returns {Object}
 */
const create = (founder) => {
  founders.push(founder);
  return founder;
};

/**
 * Return all founders
 * @returns {Array}
 */
const findAll = () => {
  return founders;
};

/**
 * Find a founder by ID
 * @param {string} id
 * @returns {Object|undefined}
 */
const findById = (id) => {
  return founders.find((founder) => founder.id === id);
};

module.exports = {
  create,
  findAll,
  findById,
};