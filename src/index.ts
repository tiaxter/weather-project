import dotenv from "dotenv";
import express, {type Request, type Response, type NextFunction} from "express";
import weatherRouter from "./routers/weather";
import businessRouter from "./routers/business";

dotenv.config({
  path: `${__dirname}/../.env`,
});

const app = express();

app.use("/api", [
  weatherRouter(),
  businessRouter(),
]);

app.listen(3000, () => console.log('App is listening on port 3000'));
