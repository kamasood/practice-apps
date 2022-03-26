const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    db.queryAsync('CREATE DATABASE IF NOT EXISTS checkout') // create database
  )
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(36) UNIQUE KEY,
        name VARCHAR(24),
        email VARCHAR(24),
        password VARCHAR(24),
        address_one VARCHAR(60),
        address_two VARCHAR(60),
        city VARCHAR(24),
        state CHAR(2),
        zipcode INT(5),
        phone INT(10),
        credit_card INT(16),
        expiration INT(6),
        cvv INT(3),
        billing_zip INT(5)
      )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
