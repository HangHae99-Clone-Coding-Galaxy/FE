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
  const response = await axios.get(`${BASE_URL}/api/courses/${id}`, {
    headers: {
      authorization,
    },
  });
  return response.data;
};

export const postCourseIdApi = async (id) => {
  await axios.post(`${BASE_URL}/api/courses/${id}/order`, {
    headers: {
      authorization,
    },
  });
};

export const delCreateApi = async (id) => {
  await axios.delete(`${BASE_URL}/api/courses/${id}/remove`, {
    headers: {
      authorization,
    },
  });
};

export const editCreateApi = async (payload) => {
  await axios.put(`${BASE_URL}/api/courses/${payload.id}`, payload.upData, {
    headers: {
      authorization,
    },
  });
};
