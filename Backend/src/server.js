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
const router = express.Router();
dotenv.config();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: `${process.env.DB_PASSWORD}`,
//   port: `${process.env.DB_PORT}`,
//   database: 'projects_db'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   // var sql = "CREATE TABLE users (user VARCHAR(255), password VARCHAR(255))";
//   // connection.query(sql, function (err, result) {
//   //   if (err) throw err;
//   // });
// });

// app.get('/projects', (req, res) => {
//   res.send('hello world')
// })

// router.get("/projects", async (req, res) => {
// 	var sql = "SELECT * FROM projects";
//   try {
// 		// const projects = await db(sql);
// 		return res.send({
// 			success: true,
// 			result: {
// 				// projects,
// 			},
// 		});
// 	} catch (e) {
// 		console.error(e);
//     console.log("error");
//     return res.status(500).send({
// 			success: false,
// 			message: "internal server error",
// 		});
// 	}
// });


app.use('/',routes);

app.listen(port, () => {
  console.log(`You listening to port ${port}`)
})
