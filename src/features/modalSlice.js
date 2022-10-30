import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  searchOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    openSearchModal: (state, action) => {
      state.searchOpen = true;
    },
    closeSearchModal: (state, action) => {
      state.searchOpen = false;
    },
  },
});

export const { openModal, closeModal, openSearchModal, closeSearchModal } =
  modalSlice.actions;

export default modalSlice.reducer;
