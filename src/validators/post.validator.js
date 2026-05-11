const validatePost = (data) => {
  const { founderId, content } = data;

  // Validate founderId
  if (
    !founderId ||
    typeof founderId !== "string" ||
    !founderId.trim()
  ) {
    throw new Error("Founder ID is required");
  }

  // Validate content
  if (
    !content ||
    typeof content !== "string" ||
    !content.trim()
  ) {
    throw new Error("Content is required");
  }
};

module.exports = {
  validatePost,
};