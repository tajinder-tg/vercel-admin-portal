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
    uploadUserProfileInit: (state) => {
      state.isUserProfile = true;
    },
    uploadUserProfileSuccess: (state, action) => {
      state.isUserProfile = false;
      state.success = true;
      state.userProfileInfo = action?.payload?.data;
    },
    uploadUserProfileError: (state, action) => {
      state.isUserProfile = false;
      state.success = false;
      state.userProfileInfo = null;
      state.error = action?.payload;
    },
  },
});

export const {
  uploadImageInit,
  uploadImageSuccess,
  uploadImageError,
  uploadUserProfileInit,
  uploadUserProfileError,
  uploadUserProfileSuccess,
  removeUploadImage,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
