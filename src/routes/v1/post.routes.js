const express = require("express");
const router = express.Router();

const { postController } = require("../../controllers");

// POST /api/v1/posts
router.post("/", postController.createPost);

// GET /api/v1/posts
// Optional filter: /api/v1/posts?founderId=<id>
router.get("/", postController.getAllPosts);

module.exports = router;