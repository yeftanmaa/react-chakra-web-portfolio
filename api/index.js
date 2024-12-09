const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  if (req.url.startsWith("/api/")) {
    // Route should be handled by the backend
    console.log(`Handling backend route: ${req.url}`);
    next(); // Pass control to the next middleware/route handler
  } else {
    // Route should be handled by the React client
    console.log(`Handling client route: ${req.url}`);
    res.sendFile(path.join(__dirname, "../client/build", "index.html")); // Serve React's index.html
  }
});


app.get("/api/testing", (req, res) => {
  res.send("Hello from the Node.js API!");
});

app.get("/api/testing22", (req, res) => {
  res.send("Hello from the Node.js API 22s!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
