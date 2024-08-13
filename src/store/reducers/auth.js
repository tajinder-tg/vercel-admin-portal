import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  token: null,
  userDetail: null,
  success: false,
  isLoggedIn: false,
  passwordEdited: false,
  walletId: null,
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginInit: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.success = true;
      state.loading = false;
      state.isLoggedIn = true;
      state.status = true;
    },
    loginError: (state) => {
      state.loading = false;
      state.success = false;
      state.isLoggedIn = false;
      state.status = null;
    },
    logoutSuccess: () => initialState,
  },
});

export const { loginInit, loginSuccess, loginError, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
