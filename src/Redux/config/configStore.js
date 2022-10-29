import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../../features/modalSlice";
import userSlice from "../../features/userSlice";
import addCreateSlice from "../modules/addCreateSlice";

export const store = configureStore({
<<<<<<< HEAD
    
=======
>>>>>>> 5cb7148350d7a2c43bb2caf8bf891b30b42357d6
  reducer: {
    modalSlice,
    userSlice,
    addCreateSlice,

  },

<<<<<<< HEAD
=======
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
>>>>>>> 5cb7148350d7a2c43bb2caf8bf891b30b42357d6
});
