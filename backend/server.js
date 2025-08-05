const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const feedbackRoutes = require("./routes/feedbackRoutes");

// ✅ CORS configuration to allow both Live Server variants
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  methods: ["GET", "POST"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ API Routes
app.use("/api", feedbackRoutes);

// ✅ Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

