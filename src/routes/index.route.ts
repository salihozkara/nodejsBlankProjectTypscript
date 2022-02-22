import express from "express";
import WeatherForecastRouter from "./weatherForecast.route";

export default class IndexRoute {
  router: express.Router;
  constructor(private weatherForecastrouter: WeatherForecastRouter) {
    this.router = express.Router();
    this.init();
  }
  init() {
    this.router.get("/", (req, res) => {
      res.send("Hello World");
    });

    this.router.get("/health", (req, res) => {
      const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
      };
      res.send(JSON.stringify(healthcheck));
    });

    this.router.use("/weatherForecast", this.weatherForecastrouter.getRoute());
  }
  getRoute(): express.Router {
    return this.router;
  }
}
