import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "nya3TK00rNmsh934B4JB3dPwB4z8p11jTwTjsneME6Qn638aix",
    },
  });
  return data;
};
