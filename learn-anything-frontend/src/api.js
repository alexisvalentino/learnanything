import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchTopics = async () => {
  const response = await axios.get(`${API_URL}/topics`);
  return response.data;
};

export const addResource = async (resourceData) => {
  const response = await axios.post(`${API_URL}/resources`, resourceData);
  return response.data;
};