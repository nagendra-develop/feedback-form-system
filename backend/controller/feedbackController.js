const db = require("../db");
const logToFile = require("../utils/logtofile");

const submitFeedback = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const query = "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("Database insert error:", err.message);
      return res.status(500).json({ message: "Database error" });
    }

    logToFile(`📥 Feedback from ${name} (${email})`);
    res.status(201).json({ message: "✅ Your feedback has been successfully recorded!" });
  });
};

module.exports = { submitFeedback };
