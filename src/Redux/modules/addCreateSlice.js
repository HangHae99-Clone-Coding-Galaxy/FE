import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCreateApi,
  getCreateApi,
  getCreateIdApi,
  delCreateApi,
  editCreateApi,
} from "./Api/addCreateApi";

export const __addCreate = createAsyncThunk(
  "addCreate",
  async (payload, thunkAPI) => {
  
    try {
      await addCreateApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCreate = createAsyncThunk(
  "getCreate",
  async (payload, thunkAPI) => {
    try {
      const response = await getCreateApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCreateId = createAsyncThunk(
  "getCreateId",
  async (payload, thunkAPI) => {
    try {
      const response = await getCreateIdApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delCreate = createAsyncThunk(
  "delCreate",
  async (payload, thunkAPI) => {
    try {
      const response = await delCreateApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editCreate = createAsyncThunk(
  "editBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await editCreateApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCreateSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    course: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //   POST Request board Item
    [__addCreate.pending]: (state) => {
      state.isLoading = true;
    },
    [__addCreate.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.courses.push(action.payload);
    },
    [__addCreate.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getCreate.pending]: (state) => {
      state.isLoading = true;
      state.isDone = false;
    },
    [__getCreate.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isDone = true;
      state.courses = action.payload;
    },
    [__getCreate.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getCreateId.pending]: (state) => {
      state.isLoading = true;
      state.isDone = false;
    },
    [__getCreateId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isDone = true;
      state.course = action.payload;
    },
    [__getCreateId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // DELETE Request board Item
    [__delCreate.pending]: (state) => {
      state.isLoading = true;
    },
    [__delCreate.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.filter((item) => item.id !== action.payload);
    },
    [__delCreate.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // EDIT Request board Item
    [__editCreate.pending]: (state) => {
      state.isLoading = true;
    },
    [__editCreate.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.courses = state.courses.map((courses) => {
        return courses.id === action.payload.id ? action.payload : courses;
      });
    },
    [__editCreate.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//   export const { addPost } = addCreateSlice.actions;
export default addCreateSlice.reducer;
