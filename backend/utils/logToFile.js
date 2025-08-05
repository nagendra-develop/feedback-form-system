const fs = require("fs");
const path = require("path");

const logToFile = (message) => {
  const logPath = path.join(__dirname, "..", "logs.txt");
  const logMessage = `${new Date().toISOString()} - ${message}\n`;

  fs.appendFile(logPath, logMessage, (err) => {
    if (err) console.error("Log error:", err);
  });
};

module.exports = logToFile;
