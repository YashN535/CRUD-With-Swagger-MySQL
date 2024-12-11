//Importing Modules

const mysql = require("mysql2");

//Configuring MySQL Connection Pool

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "IronMan5499:)",
  database: "mydatabase",
});

module.exports = pool.promise();
