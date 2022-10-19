const express = require("express");
const db = require("../db/mysql-init");
const router = express.Router();
router.use(express.json());

//get projects
router.get("/projects", async (req, res) => {
	var sql = "SELECT * FROM projects";
	try {
		const projects = await db(sql);
		return res.send({
			success: true,
			result: {
				projects,
			},
		});
	} catch (e) {
		console.error(e);
		return res.status(500).send({
			success: false,
			message: "internal server error",
		});
	}
});

//add project
router.post("/add-project", (req, res) => {
	//   const result=parseInt(req.query.num1)*parseInt(req.query.num2)
	//   res.send(result.toString());
});

module.exports = router;
