const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

module.exports = (passport, pool) => {
  passport.use(
    new localStrategy((username, password, done) => {
      pool.query(
        "SELECT id, name, last_name,email, password FROM users WHERE email=$1",
        [username],
        (err, result) => {
          const first = result.rows[0];
          bcrypt.compare(password, first.password, function(err, res) {
            if (res) {
              done(null, {
                id: first.id,
                email: first.email
              });
            } else {
              done(null, false);
            }
          });
        }
      );
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    pool.query(
      "SELECT id, name, email FROM users WHERE id = $1",
      [parseInt(id, 10)],
      (err, results) => {
        if (err) {
          console.error(
            "Error when selecting user on session deserialize",
            err
          );
          return cb(err);
        }

        cb(null, { username: results.rows[0].email });
      }
    );
  });
};
