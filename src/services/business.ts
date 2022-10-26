import axios from "axios";

type Category = {
  title: string,
  alias: string,
}

export const getBusinessByCity = async (cityName: string) => {
  const ENDPOINT = `https://api.yelp.com/v3/businesses/search`;
  // make the request to yelp api
  const business = (await axios.get(ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
    params: {
      location: cityName,
      categories: 'shopping',
    }
  })).data;

  return business["businesses"].map((item: any) => ({
    "yelpId": item.id,
    "name": item.name,
    "imageUrl": item.image_url,
    "address": item.location?.display_address?.[0] ?? '',
    "categories": (item?.categories ?? []).map((category: Category) => category.title)
  }));
}
