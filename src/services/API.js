import axios from "axios";

axios.defaults.baseURL = "https://646113d4491f9402f49e1b89.mockapi.io";

export const getCardTweets = async (limit) => {
  const response = await axios.get(`/users/?page=1&limit=${limit}`);
  return response.data;
};

export const updateCardTweets = async (id, updatedData) => {
  const response = await axios.put(`/users/${id}`, updatedData);

  return response.data;
};
