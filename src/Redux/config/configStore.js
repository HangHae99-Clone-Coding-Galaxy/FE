import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalSlice from "../../features/modalSlice";
import userSlice from "../../features/userSlice";
import addCreateSlice from "../modules/addCreateSlice";

export const store = configureStore({

  reducer: {
    modalSlice,
    userSlice,
    addCreateSlice,

  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

});
