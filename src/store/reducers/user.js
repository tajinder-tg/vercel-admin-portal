import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserList: false,
  isUserDetails: false,
  userList: [],
  userDetails: null,
  success: false,
  isError: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetailInit: (state) => {
      state.isUserDetails = true;
      state.success = false;
      state.isError = null;
    },
    getUserListInit: (state) => {
      state.isUserList = true;
      state.success = false;
      state.isError = null;
    },

    getUserDetailSuccess: (state, action) => {
      state.userDetails = action.payload;
      state.success = true;
      state.isUserDetails = false;
      state.isError = null;
    },
    getUserListSuccess: (state, action) => {
      state.userList = action.payload;
      state.success = true;
      state.isUserList = false;
      state.isError = null;
    },

    getUserListError: (state, action) => {
      state.success = false;
      state.isUserList = false;
      state.userList = [];
      state.isError = action?.payload;
    },
    getUserDetailError: (state, action) => {
      state.success = false;
      state.isUserDetails = false;
      state.userDetails = null;
      state.isError = action?.payload;
    },
  },
});

export const {
  getUserDetailInit,
  getUserListInit,
  getUserDetailSuccess,
  getUserListSuccess,
  getUserListError,
  getUserDetailError,
} = userSlice.actions;

export default userSlice.reducer;
