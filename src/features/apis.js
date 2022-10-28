import axios from "axios";

// user
export const addUserApi = (users) => {
  axios.post("http://localhost:3000/users/signup", users);
};

export const setUserApi = (login) => {
  axios.post("http://localhost:3000/user", login);
};
