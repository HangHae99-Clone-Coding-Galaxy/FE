import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER

export const addCreateApi = async (payload) => {
await axios.post(`${BASE_URL}/courses`, payload);
  };

  export const getCreateApi = async () => {
    const response = await axios.get(`${BASE_URL}/courses`);
    return response.data;
  };

  export const getCreateIdApi = async (id) => {
    const response = await axios.get(`${BASE_URL}/courses?id=${id}`);
    return response.data[0];
  };