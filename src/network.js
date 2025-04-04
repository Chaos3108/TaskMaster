import axios from "axios";

const apiKey = process.env.REACT_APP_URL;
console.log("API Base URL:", apiKey);

const instance = axios.create({
  baseURL: "https://task-manager-be-z905.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export const apiNetwork = {
  get: async (endpoint, params = {}) => {
    try {
      const response = await instance.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error("GET request error:", error);
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await instance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("POST request error:", error);
      throw error;
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await instance.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("PUT request error:", error);
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await instance.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error("DELETE request error:", error);
      throw error;
    }
  },
};
