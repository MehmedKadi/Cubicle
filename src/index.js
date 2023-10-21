const express = require("express");
const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
  res.send("Welcome to Home Page! :)");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
