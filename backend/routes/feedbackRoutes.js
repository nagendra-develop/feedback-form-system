const express = require("express");
const router = express.Router();
const { submitFeedback } = require("../controller/feedbackcontroller");

// POST /api/feedback
router.post("/feedback", submitFeedback);

module.exports = router;

