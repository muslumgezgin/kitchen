const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

module.exports = (app, passport) => {
  app.use(bodyParser.json());

  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(cookieParser());
  app.use(
    session({
      secret: "Our little secret.",
      resave: false,
      saveUninitialized: false
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
