const { getUsers, createUser, getUserById, login } = require("../User");
const { isLoggedIn } = require("../utils/index");
module.exports = (app, passport, db) => {
  app.all("*", (res, req, next) => {
    next();
  });

  app.use("/users", (req, res, next) => {
    let x = false;
    if (x) {
      res.send("you are not uth");
    } else {
      next();
    }
  });

  app.get("/", (req, res) => {
    res.send({ message: "endpoint working" });
  });

  app.get("/getId/:id", getUserById);

  app.post("/createUser", isLoggedIn, createUser);

  app.post("/login", passport.authenticate("local"), login);

  app.get("/uploads", (req, res) => {
    res.download(__dirname + "/uploads/index.html", "index.html");
  });

  // new: route to users, that runs readAll()
  app.get("/users", isLoggedIn, getUsers);
};
