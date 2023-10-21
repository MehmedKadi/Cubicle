//* Imports
const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig.js");
const expressConfig = require("./config/expressConfig.js");
const { PORT } = require("./constants.js");
const routes = require("./router.js");

// * LOCAL variables
const app = express();

//* Configs
expressConfig(app);
handlebarsConfig(app);

//* Routing
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
