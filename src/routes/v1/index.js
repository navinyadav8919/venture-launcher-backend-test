const express = require("express");
const router = express.Router();

const founderRoutes = require("./founder.routes");
const postRoutes = require("./post.routes");

// Mount feature routes
router.use("/founders", founderRoutes);
router.use("/posts", postRoutes);

module.exports = router;