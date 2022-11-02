import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = process.env.REACT_APP_SERVER;
const authorization = localStorage.getItem("Authorization");

export const setCookie = (name, value, option) => {
  return Cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const addCreateApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/courses/create`, payload, {
    headers: {
      authorization,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getCreateApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/courses`);
  return response.data;
};

export const getCreateIdApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/courses/${id}`);
  return response.data;
};

export const delCreateApi = async (courseId) => {
  await axios.delete(`${BASE_URL}/api/courses/${courseId}`);
};

export const editCreateApi = async (payload) => {
  await axios.put(`${BASE_URL}/api/courses/${payload.id}`, payload.upData);
};
