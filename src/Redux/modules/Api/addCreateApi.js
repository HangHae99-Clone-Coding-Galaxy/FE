import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const addCreateApi = async (payload) => {
    const response = await axios.post(`${BASE_URL}/api/courses/create`, payload);
    return response.data;
  };