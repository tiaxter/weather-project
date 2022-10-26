import {Router, type Response, type Request} from "express";
import {getWeatherByCity, getWeatherWithCityData} from "../services/weather";

export default function weatherRouter() {
  const router = Router();

  router.get("/weather", async (req: Request, res: Response) => {
    // get city name from query params
    const cityName = req.query.city as string;

    try {
    // make request to the open weather api
      const weatherInfo = await getWeatherByCity({ cityName });
      // return data
      res.status(200).json(weatherInfo);
    } catch (e) {
      // catch the error
      res.status(500).json({ error: "Ops... An error ocurred, please retry later" });
    }
  });

  router.get('/weather-with-business', async (req: Request, res: Response) => {
    // get city name from query params
    const cityName = req.query.city as string;

    try {
      // make request to get weather and businesses data
      const weatherWithBusinessInfo = await getWeatherWithCityData(cityName);
      // return data
      res.status(200).json(weatherWithBusinessInfo);
    } catch (e) {
      // catch the error
      res.status(500).json({ error: "Ops... An error ocurred, please retry later" });
    }
  })

  return router;
}
