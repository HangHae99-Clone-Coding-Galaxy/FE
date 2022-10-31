// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_SERVER;

// export const addCommentApi = async (comment) => {
//   await axios.post(`${BASE_URL}/comments`, comment);
// };

// export const getCommentApi = async (payload) => {
//   const response = await axios.get(`${BASE_URL}/comments?courseId=${payload}`);
//   return response.data;
// };

// export const getPostIdApi = async (id) => {
//   const response = await axios.get(`${BASE_URL}/posts?id=${id}`);
//   return response.data[0];
// };

// export const delPostApi = async (id) => {
//   await axios.delete(`${BASE_URL}/posts/${id}`);
// };

// export const editPostApi = async (edit) => {
//   console.log(edit);
//   await axios.put(`${BASE_URL}/posts/${edit.id}`, edit);
// };
