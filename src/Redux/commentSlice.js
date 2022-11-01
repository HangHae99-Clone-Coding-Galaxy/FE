import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCommentApi,
  getCommentApi,
  getPostIdApi,
  delPostApi,
  editPostApi,
} from "./commentApi";

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    await addCommentApi(payload);
    thunkAPI.dispatch(addComment(payload));
  }
);

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    const response = await getCommentApi(payload);
    thunkAPI.dispatch(getComment(response));
  }
);


export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (state, action) => {
      const id = state.comments[state.comments.length - 1]?.id + 1 || 1;
      state.comments.push({ id, ...action.payload });
    },
    // setPost: () => {

    // },
    getComment: (state, action) => {
      state.comments = action.payload;
    },
    // getPost_Id: (state, action) => {
    //   state.post =  action.payload;
    // },
    delComment: (state, action) => {
      // state.comment = [{}, {}]  배열에서 filter를 사용
      // action.payload = {comment} 에서 id를 빼서 사용
      //...state.comet = {}, {}, {} 전개연사자를 쓰면 배열이 아니게 되니까 filter 사용 x!
      state.comment = state.comment.filter((item) => 
        item.id !== action.payload.id
      )
    },

    editComment: (state, action) => {
      state.comment = state.comment.map((item)=>{
        return item.id === action.payload.id ? action.payload : item;
      })     
    },
  },
});

export const { addComment, getComment, delComment,editComment } = commentSlice.actions;

export default commentSlice.reducer;

