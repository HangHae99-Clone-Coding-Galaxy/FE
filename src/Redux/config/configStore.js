import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalSlice from "../../features/modalSlice";
import userSlice from "../../features/userSlice";

export const store = configureStore({

  reducer: {
    modalSlice,
    userSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

});
