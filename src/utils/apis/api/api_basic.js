// Packages
import axios from "axios";

const api_basic = axios.create({
  baseURL: `https://localhost:3000`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});

export default api_basic;
