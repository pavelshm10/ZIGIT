// import config from "./../config/default.json";
const cors = "cors";
const express = require('express')
const app = express()
const port = 3000
const dotenv = require("dotenv");
const db= "./db/mysql-init";
var mysql = require('mysql');
dotenv.config();

// app.use(cors({ credentials: true, origin:['http://localhost:3001/']}));

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: `${process.env.DB_PASSWORD}`,
  database: 'projects_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You connected to DB!");
  // var sql = "CREATE TABLE users (user VARCHAR(255), password VARCHAR(255))";
  // connection.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
});

app.get('/projects', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`You listening to port ${port}`)
})
