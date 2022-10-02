import express from "express";
import { Router } from "express";
import path from "path";
// import V1Routes from "./v1/v1.routes";

class ApiRoutes {
	public router = Router();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// const v1Routes = new V1Routes();

		// this.router.use("/v1/", v1Routes.router);
		this.router.get("/health", function (req, res) {
			const health = {
				ok: true,
				message: "Healthy",
			};
			res.json(health);
			res.end();
		});

		if (process.env.NODE_ENV != "production") {
			this.router.use("/docs/", express.static(path.resolve(__dirname, "../../webApidoc")));
		}
	}
}

export default ApiRoutes;
