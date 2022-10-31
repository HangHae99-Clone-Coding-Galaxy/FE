import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER;

export const addCreateApi = async (payload) => {
  console.log(payload);
  await axios.post("http://3.35.218.131:8080/api/courses/create", payload);
};

export const getCreateApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/courses`);
  return response.data;
};

export const getCreateIdApi = async (id) => {
  console.log(id);
  const response = await axios.get(`${BASE_URL}/courses?id=${id}`);
  return response.data[0];
};

export const delCreateApi = async (courseId) => {
  await axios.delete(`${BASE_URL}/courses/${courseId}`);
};

export const editCreateApi = async (payload) => {
  await axios.put(`${BASE_URL}/courses/${payload.id}`, payload.upData);
};
