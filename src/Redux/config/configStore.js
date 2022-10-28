import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../../features/modalSlice";
import userSlice from "../../features/userSlice";

export const store = configureStore({
<<<<<<< HEAD
  reducer: {},
=======
  reducer: {
    modalSlice,
    userSlice,
  },
>>>>>>> d4c2a637f34b7b1193c47cc704a3b11650723de7
});
