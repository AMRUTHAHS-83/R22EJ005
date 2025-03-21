// src/services/api.js
import axios from "axios";

const API_BASE_URL = "https://your-api-url.com"; // Replace with your actual API URL

export const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const getUserPosts = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/posts?userId=${userId}`);
  return response.data;
};

export const getPostComments = async (postId) => {
  const response = await axios.get(`${API_BASE_URL}/comments?postId=${postId}`);
  return response.data;
};
