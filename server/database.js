const { Pool } = require("pg");

// your credentials
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "kitchen",
  password: "Mls_4461",
  port: 5432
});

module.exports = {
  pool
};
