import axios from "axios";

const API_KEY = "d91147c8bb09e15408a2cb5658d47fb4";

// base URL
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// to append API key to every request
api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
  };
  return config;
});

export default api;
