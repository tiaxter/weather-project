import axios from "axios";

export const getBusinessByCity = async (cityName: string) => {
  const ENDPOINT = `https://api.yelp.com/v3/businesses/search`;
  // make the request to yelp api
  return (await axios.get(ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
    params: {
      location: cityName,
    }
  })).data;
}
