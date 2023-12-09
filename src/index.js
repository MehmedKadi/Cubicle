//* Imports
const express = require("express");

const handlebarsConfig = require("./config/handlebarsConfig.js");
const expressConfig = require("./config/expressConfig.js");
const dbConnect = require("./config/dbConfig.js");

const { PORT } = require("./constants.js");
const routes = require("./router.js");

// * LOCAL variables
const app = express();

//* Configs
expressConfig(app);
handlebarsConfig(app);

//* Connecting to the database
dbConnect()
  .then(() => console.log("Successfully connecting to the DB!"))
  .catch((error) => console.log(`Error while connecting to the DB: ${error}!...`));

//* Routing
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
