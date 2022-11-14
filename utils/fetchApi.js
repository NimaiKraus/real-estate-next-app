import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data}= await axios
    .get(url, {
      headers: {
        "X-RapidAPI-Key": "ed76b70d9dmsh367888c053304e8p1f3d4ejsn000ebc61011d",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    })
    return data;
};