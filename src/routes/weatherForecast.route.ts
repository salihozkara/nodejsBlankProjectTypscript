import express from "express";
import WeatherForecastController from "../controllers/weatherForecast.controller.js";

export default class WeatherForecastRouter {
  router: express.Router;
  constructor(private weatherForecastController: WeatherForecastController) {
    this.router = express.Router();
    this.router.route("/").get(this.weatherForecastController.get);
  }
  getRoute(): express.Router {
    return this.router;
  }
}
