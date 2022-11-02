import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addUserApi } from "./apis";

//HG
const instance = axios.create({
  baseURL: "",
});

export const kakaoAuthApi = (payload) => {
  console.log(payload);
  return axios.get(`/api/member/kakao/callback?code=${payload}`);
};

//유저 조회하기
export const __getUsers = createAsyncThunk(
  "post/getUser",
  async (payload, thunkAPI) => {
    try {
      const users = await axios.get("http://43.201.75.53:8080");
      return thunkAPI.fulfillWithValue(users.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 유저 추가하기
export const __addUser = createAsyncThunk(
  "addUser",
  async (payload, thunkAPI) => {
    try {
      await addUserApi(payload);
      alert(payload.username + "님 환영합니다!");
      window.location.replace("/");
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __setUser = createAsyncThunk(
  "post/setUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios.post(
        "http://43.201.75.53:8080/api/member/login",
        payload
      );
      const Authorization = response.headers.Authorization;
      const RefreshToken = response.headers["RefreshToken"];
      if (response.status === 200 || response.status === 201) {
        window.localStorage.setItem("Authorization", Authorization);
        window.localStorage.setItem("RefreshToken", RefreshToken);
        alert("로그인 성공");
        window.location.replace("/");
        return thunkAPI.fulfillWithValue(response.data);
      }
    } catch (error) {
      if (400 < error.response.status && error.response.status < 500) {
        window.location.reload();
        alert("로그인 실패");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __login = createAsyncThunk(
  "post/login",
  async (payload, thunkAPI) => {
    try {
      const response = await kakaoAuthApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // state.token = action.payload.token;
      // state.isLogin = true;
    },
  },
  extraReducers: {
    // ADD User
    // [__addUser.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.users.push(action.payload);
    // },
  },
});

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
