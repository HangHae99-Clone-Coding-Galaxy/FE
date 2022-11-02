import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    console.log("add", payload);
    try {
      const data = await axios.post(
        `${BASE_URL}/api/courses/comments`,
        payload
      );
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    console.log("get", payload);
    try {
      const data = await axios.get(
        `${BASE_URL}/api/courses/comments?courseId=${payload}`
      );
      console.log("페이로드", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __fixComment = createAsyncThunk(
//   "fixComment",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.put(`${BASE_URL}/comments/${payload.id}`, {
//         desc: payload.desc,
//       });

//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __fixComment = createAsyncThunk(
  "Comments/fixComment",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `${BASE_URL}/api/courses/comments/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/api/courses/comments/${payload.id}`);
      console.log("delete_payload", payload.id);
      return thunkAPI.fulfillWithValue(payload.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const fixCommentFulfilledMethod = (payload, comments) => {
//   const newComments = comments.map((comment) => {
//     if (comment.id === payload.id) {
//       return { ...comment, desc: payload.desc };
//     } else {
//       return comment;
//     }
//   });

//   return newComments;
// };

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // Get Comment
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Add Comment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Delete Comment
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.payload =>", action.payload);
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Fix Comment
    [__fixComment.pending]: (state) => {
      state.isLoading = true;
    },
    // [__fixComment.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.comments = state.comments.map((item) => {
    //     return item.id === action.payload.id ? action.payload : item;
    //   });
    // },
    [__fixComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((comment) =>
        comment.id === action.payload.id
          ? { ...action.payload.editComment, id: action.payload.id }
          : comment
      );
    },

    [__fixComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   addCommentApi,
//   getCommentApi,
//   getPostIdApi,
//   delPostApi,
//   editPostApi,
// } from "./commentApi";

// export const __addComment = createAsyncThunk(
//   "addComment",
//   async (payload, thunkAPI) => {
//     await addCommentApi(payload);
//     thunkAPI.dispatch(addComment(payload));
//   }
// );

// export const __getComment = createAsyncThunk(
//   "getComment",
//   async (payload, thunkAPI) => {
//     const response = await getCommentApi(payload);
//     thunkAPI.dispatch(getComment(response));
//   }
// );

// export const commentSlice = createSlice({
//   name: "comments",
//   initialState: {
//     comments: [],
//   },
//   reducers: {
//     addComment: (state, action) => {
//       const id = state.comments[state.comments.length - 1]?.id + 1 || 1;
//       state.comments.push({ id, ...action.payload });
//     },
//     // setPost: () => {

//     // },
//     getComment: (state, action) => {
//       state.comments = action.payload;
//     },
//     // getPost_Id: (state, action) => {
//     //   state.post =  action.payload;
//     // },
//     delComment: (state, action) => {
//       // state.comment = [{}, {}]  배열에서 filter를 사용
//       // action.payload = {comment} 에서 id를 빼서 사용
//       //...state.comet = {}, {}, {} 전개연사자를 쓰면 배열이 아니게 되니까 filter 사용 x!
//       state.comment = state.comment.filter(
//         (item) => item.id !== action.payload.id
//       );
//     },

//     editComment: (state, action) => {
//       state.comment = state.comment.map((item) => {
//         return item.id === action.payload.id ? action.payload : item;
//       });
//     },
//   },
// });

// export const { addComment, getComment, delComment, editComment } =
//   commentSlice.actions;

// export default commentSlice.reducer;
