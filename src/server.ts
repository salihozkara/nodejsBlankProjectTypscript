import express from "express";
import bodyParser from "body-parser";
import IndexRoute from "./routes/index.route";
import WeatherForecastRouter from "./routes/weatherForecast.route";
import WeatherForecastController from "./controllers/weatherForecast.controller";
import WeatherForecastService from "./services/weatherForecast.service";

// Create the express app
export default class Server {
  app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  config() {
    // parse application/json
    this.app.use(bodyParser.json());
  }
  routes() {
    let router = new IndexRoute(
      new WeatherForecastRouter(
        new WeatherForecastController(new WeatherForecastService())
      )
    ).getRoute();
    this.app.use(router);
  }
  start() {
    let port = 8081;
    this.app.listen(port);
    console.log(`http server listening at port ${port}`);
  }
}

// Start the server
let server = new Server();
server.start();
