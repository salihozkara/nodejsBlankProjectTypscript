import { Request, Response } from "express";
import WeatherForecastService from "../services/weatherForecast.service";

export default class WeatherForecastController {
  constructor(private weatherForecastService: WeatherForecastService) {}
  get(req: Request, res: Response): void {
    res.end(JSON.stringify(this.weatherForecastService.getWeatherForecast()));
  }
}
