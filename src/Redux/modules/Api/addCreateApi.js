import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = process.env.REACT_APP_SERVER;

export const setCookie = (name, value, option) => {
  return Cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const addCreateApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/courses/create`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getCreateApi = async () => {
  const response = await axios.get(`${BASE_URL}/courses`);
  return response.data;
};

export const getCreateIdApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/courses?id=${id}`);
  return response.data[0];
};

export const delCreateApi = async (courseId) => {
  await axios.delete(`${BASE_URL}/courses/${courseId}`);
};

export const editCreateApi = async (payload) => {
  await axios.put(`${BASE_URL}/courses/${payload.id}`, payload.upData);
};
