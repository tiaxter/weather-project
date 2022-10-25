import {Router, type Request, type Response} from "express";
import {getBusinessByCity} from "../services/business";

export default function businessRouter() {
  const router = Router();

  router.get("/business", async (req: Request, res: Response) => {
    // get city from query params
    const cityName = req.query.city as string;

    try {
      // get data
      const data = await getBusinessByCity(cityName);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ error: "Ops... An error ocurred, please retry later" });
    }
  });

  return router;
}
