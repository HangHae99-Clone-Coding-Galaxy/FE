import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPostApi,
  getPostApi,
  getPostIdApi,
  delPostApi,
  editPostApi,
} from "../Redux/PostApi";

export const __addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    await addPostApi(payload);
    thunkAPI.dispatch(addPost(payload));
  }
);
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    const response = await getPostApi(payload);
    thunkAPI.dispatch(getPost(response));
  }
);
export const __getPostId = createAsyncThunk(
  "getPost_Id",
  async (payload, thunkAPI) => {
    const response = await getPostIdApi(payload);
    thunkAPI.dispatch(getPost_Id(response));
  }
);
export const __delPost = createAsyncThunk(
  "delPost",
  async (payload, thunkAPI) => {
    await delPostApi(payload);
    thunkAPI.dispatch(delPost(payload));
  }
);
export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    await editPostApi(payload);
    thunkAPI.dispatch(editPost(payload));
  }
);
export const bookSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    post: {},
  },
  reducers: {
    addPost: (state, action) => {
      const id = state.posts[state.posts.length - 1]?.id + 1 || 0;
      state.posts.push({ id, ...action.payload });
    },
    // setPost: () => {
    // },
    getPost: (state, action) => {
      state.posts = action.payload;
    },
    getPost_Id: (state, action) => {
      state.post = action.payload;
    },
    delPost: (state, action) => {
      state.posts = action.payload.filter((item) => item.id !== action.payload);
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((todo) => {
        return todo.id === action.payload.id ? action.payload : todo;
      });
    },
  },
});
export const { addPost, getPost, getPost_Id, delPost, editPost } =
  bookSlice.actions;
export default bookSlice.reducer;
