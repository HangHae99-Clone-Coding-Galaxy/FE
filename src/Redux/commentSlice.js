import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const accessToken = localStorage.getItem("authorization");

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (payload, thunkAPI) => {
    // console.log("hi");
    // console.log(payload);
    // console.log(payload.content);

    // console.log(payload.id);

    try {
      const { data } = await axios.post(
        `http://3.38.153.4:8080/${payload.id}/comments`,
        payload,
        {
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
