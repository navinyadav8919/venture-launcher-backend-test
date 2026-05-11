const generateId = require("../utils/generateId");
const { founderValidator } = require("../validators");
const { founderRepository } = require("../repositories");

const createFounder = (data) => {
  // Validate input
  founderValidator.validateFounder(data);

  // Create founder object
  const founder = {
    id: generateId("founder"),
    name: data.name.trim(),
    email: data.email.trim(),
    role: data.role,
    sectors: Array.isArray(data.sectors) ? data.sectors : [],
    createdAt: new Date().toISOString(),
  };

  // Save and return
  return founderRepository.create(founder);
};

const getAllFounders = () => {
  return founderRepository.findAll();
};

module.exports = {
  createFounder,
  getAllFounders,
};