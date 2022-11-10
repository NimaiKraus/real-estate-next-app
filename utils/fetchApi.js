import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  return await axios
    .get(url, {
      headers: {
        "X-RapidAPI-Key": "ed76b70d9dmsh367888c053304e8p1f3d4ejsn000ebc61011d",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    })
    .then((response) => {
      console.log(JSON.parse(JSON.stringify(response.data.hits.map(apartment => {
        return {
          agency: apartment.agency,
          title: apartment.title,
        }
      }))));
      return response.data.hits;
    })
    .catch((err) => console.log(err));
};