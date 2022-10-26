import axios from "axios";
import {kelvinToCelsius} from "../utils/temperature";
import {getBusinessByCity} from "./business";

type getWeatherByCityArgs = {
  cityName: string,
}

export const getWeatherByCity = async ({ cityName } : getWeatherByCityArgs) => {
  const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather`;
  
  const response = (await axios.get(ENDPOINT, {
    params: {
      q: cityName,
      APPID: process.env.OPEN_WEATHER_API_KEY,
    },
  })).data;

  return {
    id: response.id,
    name: response.name,
    weatherDescription: response.weather[0].description,
    weatherIcon: `https://openweathermap.org/img/w/${response.weather[0].icon}.png`,
    unitOfMeasure: "celsius",
    temperature: kelvinToCelsius(response.main.temp),
    termperatureMininum: kelvinToCelsius(response.main.temp_min),
    termperatureMaxinum: kelvinToCelsius(response.main.temp_max),
    pressure: response.main.pressure,
    humidity: response.main.humidity,
  };
}

export const getWeatherWithCityData = async (cityName: string) => {
  // get weather data using the method above
  const weatherData = await getWeatherByCity({cityName})
  // get business data of the city
  const cityData = await getBusinessByCity(cityName);

  return {
    weather: weatherData,
    business: cityData,
  };
}
