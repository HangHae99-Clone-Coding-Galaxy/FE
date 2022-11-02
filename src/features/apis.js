import axios from "axios";

// user
export const addUserApi = async (payload) => {
  await axios.post("http://43.201.75.53:8080/api/member/signup", payload);
};

export const setUserApi = async (login) => {
  await axios.post("http://43.201.75.53:8080/api/member/login", login);
};
