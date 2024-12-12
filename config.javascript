const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "grocery"
});

conn.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL: ' + err.stack);
    process.exit(1);
  }
});

