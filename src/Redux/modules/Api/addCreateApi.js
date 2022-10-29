import axios from "axios";


export const addCreateApi = async (payload) => {
    const response = await axios.post("http://localhost:3001/create", payload);
    return response.data;
  };