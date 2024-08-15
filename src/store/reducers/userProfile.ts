import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUploadFile: false,
  error: null,
  success: false,
  fileUrl: null,
  isUserProfile: false,
  userProfileInfo: null,
};
export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    getUserProfileInit: (state) => {
      state.isUserProfile = true;
    },
    getUserProfileSuccess: (state, action) => {
      state.isUserProfile = false;
      state.success = true;
      state.userProfileInfo = action?.payload?.data;
    },
    getUserProfileError: (state, action) => {
      state.isUserProfile = false;
      state.success = false;
      state.userProfileInfo = null;
      state.error = action?.payload;
    },
    uploadImageInit: (state) => {
      state.isUploadFile = true;
    },
    uploadImageSuccess: (state, action) => {
      state.isUploadFile = false;
      state.fileUrl = action?.payload?.data;
      state.success = true;
    },
    uploadImageError: (state, action) => {
      state.success = false;
      state.isUploadFile = false;
      state.fileUrl = null;
      state.error = action?.payload;
    },
    removeUploadImage: (state) => {
      state.isUploadFile = false;
      state.fileUrl = null;
      state.error = null;
    },
  },
});

export const {
  getUserProfileInit,
  getUserProfileSuccess,
  getUserProfileError,
  uploadImageSuccess,
  uploadImageInit,
  uploadImageError,
  removeUploadImage,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
