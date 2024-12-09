const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/testing", (req, res) => {
  res.send("Hello from the Node.js API!");
});

app.get("/api/testing22", (req, res) => {
  res.send("Hello from the Node.js API 22s!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
