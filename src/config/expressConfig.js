const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

//* Set Up static files
const expressConfig = (app) => {
  //? app.use(express.static("src/public"));
  const staticFiles = express.static(path.resolve(__dirname, "../public"));
  app.use(staticFiles);
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};

module.exports = expressConfig;
