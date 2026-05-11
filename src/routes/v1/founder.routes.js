const express = require("express");
const router = express.Router();

const { founderController } = require("../../controllers");

// POST /api/v1/founders
router.post("/", founderController.createFounder);

// GET /api/v1/founders
router.get("/", founderController.getAllFounders);

module.exports = router;