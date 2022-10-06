// import config from "./../config/default.json";
// const cors = "cors";
const express = require('express')
const app = express()
const port = 3000
const dotenv = require("dotenv");
const db= "./db/mysql-init";
var mysql = require('mysql');
const routes = require('./api/routes');
const cors = require('cors');
const con= require('./db/mysql-init')
dotenv.config();

// app.use(cors({
//   origin: ['http://localhost:3000','http://localhost:4200/','*'],
//   methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
  // console.log();
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: `${process.env.DB_PASSWORD}`,
//   port: `${process.env.DB_PORT}`,
//   database: 'projects_db'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("You connected to DB!");
//   // var sql = "CREATE TABLE users (user VARCHAR(255), password VARCHAR(255))";
//   // connection.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Table created");
//   // });
// });

app.use('/',routes);

// app.get('/projects',routes, (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`You listening to port ${port}`)
})
