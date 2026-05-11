const SERVER_CONFIG = require("../config/server.config");

const validateFounder = (data) => {
  const { name, email, role, sectors } = data;

  // Validate name
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("Name is required");
  }

  // Validate email
  if (!email || typeof email !== "string" || !email.trim()) {
    throw new Error("Email is required");
  }

  // Validate role
  if (!role || !SERVER_CONFIG.VALID_ROLES.includes(role)) {
    throw new Error("Role must be either founder or investor");
  }

 
};

module.exports = {
  validateFounder,
};