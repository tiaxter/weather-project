import axios from "axios";

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

  return response;
}
