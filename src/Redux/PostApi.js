import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const addCommentApi = async (comment) => {
  await axios.post(`${BASE_URL}/comments/`, comment);
};

export const getCommentApi = async (payload) => {
  //코멘트 페이지에서 받아온 주소창에 있던 id
  const response = await axios.get(`${BASE_URL}/comments?postid=${payload}`);
  return response.data;
};

export const delCommentApi = async (comment) => {
  await axios.delete(`${BASE_URL}/comments/${comment.id}`);
};

export const editCommentApi = async (edit) => {
  await axios.put(`${BASE_URL}/comments/${edit.id}`, edit);
};
