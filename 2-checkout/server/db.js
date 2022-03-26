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
        state VARCHAR(10),
        zipcode VARCHAR(5),
        phone VARCHAR(15),
        credit_card VARCHAR(16),
        expiration VARCHAR(10),
        cvv VARCHAR(5),
        billing_zip VARCHAR(5)
      )`
    )
  )
  .catch((err) => console.error(err));

module.exports = db;
