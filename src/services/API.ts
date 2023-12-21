import axios from 'axios';
import { Tweet } from '../components/tweetsList/TweetsList';

interface UpdatedData {
  selected: boolean;
  followers: number;
}

axios.defaults.baseURL = 'https://646113d4491f9402f49e1b89.mockapi.io';

export const getCardTweets = async (limit: number): Promise<Tweet[]> => {
  const response = await axios.get(`/users/?page=1&limit=${limit}`);
  return response.data as Tweet[];
};

export const updateCardTweets = async (
  id: string,
  updatedData: UpdatedData
) => {
  await axios.put(`/users/${id}`, updatedData);
};
