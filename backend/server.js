const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const feedbackRoutes = require("./routes/feedbackRoutes");

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON
app.use(express.static("public")); // Serve frontend files

// Routes
app.use("/api", feedbackRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
