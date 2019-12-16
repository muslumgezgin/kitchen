const bcrypt = require("bcrypt");
const saltRounds = 10;
const { pool } = require("./database");

// your credentials

const getUsers = (request, response) => {
  console.log(request.isAuthenticated());
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const login = (request, response, next) => {
  response.send("authorized");
};

const createUser = (request, response) => {
  const { name, email, password, last_name } = request.body;
  console.log(request.body);
  bcrypt.hash(password, saltRounds, function(err, hash) {
    pool.query(
      "INSERT INTO users (name, last_name,email,password) VALUES ($1, $2, $3, $4)",
      [name, last_name, email, hash],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`User added with ID: ${results.id}`);
      }
    );
  });
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${results.id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};
// a generic query, that executes all queries you send to it
function query(text) {
  return new Promise((resolve, reject) => {
    console.log(text);
    pool
      .query(text)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  query,
  login
};
