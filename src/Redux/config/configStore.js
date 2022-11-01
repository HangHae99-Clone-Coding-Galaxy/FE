import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalSlice from "../../features/modalSlice";
import userSlice from "../../features/userSlice";
import addCreateSlice from "../modules/addCreateSlice";
import commentSlice from "../commentSlice";

export const store = configureStore({
  reducer: {
    modalSlice,
    userSlice,
    addCreateSlice,
    commentSlice,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
