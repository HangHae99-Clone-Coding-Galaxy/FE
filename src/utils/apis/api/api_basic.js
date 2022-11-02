// Packages
import axios from "axios";

const api_basic = axios.create({
  baseURL: `http://43.201.75.53:8080`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});

export default api_basic;
