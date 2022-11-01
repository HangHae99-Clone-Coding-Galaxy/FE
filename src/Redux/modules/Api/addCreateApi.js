import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER;

export const addCreateApi = async (payload) => {

  for (let pair of payload.entries()) {
    console.log(pair[0] + "," + pair[1]);
  }
  await axios.post(`${BASE_URL}/api/courses/create`, payload);
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
