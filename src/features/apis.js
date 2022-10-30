import axios from "axios";

// user
export const addUserApi = async (payload) => {
  await axios.post("http://localhost:3001/signup", payload);
};

export const setUserApi = async (login) => {
  await axios.post("http://localhost:3001/user", login);
};
