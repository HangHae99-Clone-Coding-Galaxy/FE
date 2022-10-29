import axios from "axios";


export const addCreateApi = async (payload) => {
  const response = await axios.post("http://localhost:3001/create", payload);
  return response.data;
  };

  export const getCreateApi = async () => {
    const response = await axios.get("http://localhost:3001/create");
    return response.data;
  };