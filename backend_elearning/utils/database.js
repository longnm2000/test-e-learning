const mysql2 = require("mysql2");


const pool = mysql2.createPool({
  database: process.env.DB_DATABASE ,
  password: process.env.DB_PASSWORD ,
  host: process.env.DB_HOST ,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("ket noi that bai");
  } else {
    console.log("ket noi thanh cong");
  }
});

module.exports = pool.promise();
