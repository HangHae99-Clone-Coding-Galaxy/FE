import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {addCreateApi} from "./Api/addCreateApi"


export const __addCreate = createAsyncThunk(
    "addCreate",
    async (payload, thunkAPI) => {
      try{
        const response = await addCreateApi(payload);
        return thunkAPI.fulfillWithValue(response);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const addCreateSlice = createSlice({
    name: "courses",
    initialState:{
        courses : [],
        board: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers:{
  
    //   POST Request board Item
      [__addCreate.pending]: (state) => {
        state.isLoading = true;
      },
      [__addCreate.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.courses.push(action.payload);
      },
      [__addCreate.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
  
    //   // DELETE Request board Item
    //   [__delBoard.pending]: (state) => {
    //     state.isLoading = true;
    //   },
    //   [__delBoard.fulfilled]: (state, action) => {
    //     state.isLoading = false;
    //     state.boards = state.boards.filter((item)=>
    //     item.id !== action.payload)
    //   },
    //   [__delBoard.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
  
    //   // EDIT Request board Item
    //   [__editBoard.pending]: (state) => {
    //     state.isLoading = true;
    //   },
    //   [__editBoard.fulfilled]: (state, action) => {
    //     state.isLoading = false;
    //     console.log(action.payload);
    //     state.boards = state.boards.map((board)=>{
    //       return board.id === action.payload.id ? action.payload : board
    //     });
    //   },
    //   [__editBoard.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   }
    }
  });
  
//   export const { addPost } = addCreateSlice.actions;
  export default addCreateSlice.reducer;