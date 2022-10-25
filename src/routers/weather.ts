import {Router, type Response, type Request} from "express";
import {getWeatherByCity} from "../services/weather";

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
      res.status(500).json({error: e});
    }
  });

  return router;
}
