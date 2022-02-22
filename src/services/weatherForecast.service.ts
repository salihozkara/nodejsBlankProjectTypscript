import WeatherForecast from "../models/weatherForecast";

export default class WeatherForecastService {
  summaries = [
    "Freezing",
    "Bracing",
    "Chilly",
    "Cool",
    "Mild",
    "Warm",
    "Balmy",
    "Hot",
    "Sweltering",
    "Scorching",
  ];

  getWeatherForecast(): WeatherForecast[] {
    return Array.from({ length: 5 }, (_, index) => {
      return {
        date: new Date(new Date().getTime() + index * 86400000),
        temperatureC: Math.round(Math.random() * 20) + 10,
        summary:
          this.summaries[Math.floor(Math.random() * this.summaries.length)],
      };
    });
  }
}
