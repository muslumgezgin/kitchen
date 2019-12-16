require("dotenv").config();
const express = require("express");
const passport = require("passport");
const { pool } = require("./database");
const app = express();
const PORT = 8080;
require("./config/passport")(passport, pool);
require("./config/express")(app, passport);
require("./config/routes")(app, passport);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
