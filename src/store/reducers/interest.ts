import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInterestList: false,
  error: null,
  success: false,
  interestList: [],
  isInterestAddEdit: false,
};
export const interestSlice = createSlice({
  name: "interest",
  initialState,
  reducers: {
    interestListInit: (state) => {
      state.isInterestList = true;
    },
    interestListSuccess: (state, action) => {
      state.isInterestList = false;
      state.interestList = action?.payload?.data;
      state.success = true;
    },
    interestListError: (state, action) => {
      state.success = false;
      state.isInterestList = false;
      state.interestList = [];
      state.error = action?.payload;
    },
  },
});

export const { interestListInit, interestListSuccess, interestListError } =
  interestSlice.actions;

export default interestSlice.reducer;
