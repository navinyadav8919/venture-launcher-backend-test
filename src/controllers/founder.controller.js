const { founderService } = require("../services");

const createFounder = (req, res) => {
  try {
    const founder = founderService.createFounder(req.body);

    return res.status(201).json({
      success: true,
      data: founder,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllFounders = (req, res) => {
  try {
    const founders = founderService.getAllFounders();

    return res.status(200).json({
      success: true,
      count: founders.length,
      data: founders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

module.exports = {
  createFounder,
  getAllFounders,
};