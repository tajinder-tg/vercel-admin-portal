import { toast } from "react-toastify";
// import toastConfig from "../utils/toastConfig";
import toastConfig from "../../utils/toastConfig";
import UsersApi from "../../api/UsersApi";

import {
  setProfile,
  editProfile,
  editProfileDone,
  editProfileError,
  editPasswordSuccess,
  editPasswordError,
  editPasswordInit,
  setResetPasswordSuccess,
  setResetPasswordError,
  resetProfile,
  getProfile,
  getProfileError,
} from "../reducers/profile";

export const getUserByUsername = (username) => async (dispatch) => {
  try {
    dispatch(getProfile());
    const response = await UsersApi.getUserByUsername(username);
    console.log(response);
  } catch (ex) {
    console.log(ex.response?.data);
    // dispatch(getProfileError(ex.message));
    // toast.error(
    // 	`${ex.response?.data?.message}`,
    // 	toastConfig
    // );
  }
};
export const editUser = (userId, profile) => async (dispatch) => {
  try {
    dispatch(editProfile());
    const response = await UsersApi.editProfile(userId, profile);

    dispatch(editProfileDone());

    dispatch(setProfile({ profile: response.result }));
  } catch (ex) {
    dispatch(editProfileError(ex.message));
    toast.error(`${ex.response?.data?.message}`, toastConfig);
  }
};

export const editPassword =
  (userId, currentPassword, password, passwordConfirmation) =>
  async (dispatch) => {
    try {
      dispatch(editPasswordInit());
      await UsersApi.editPassword(
        userId,
        currentPassword,
        password,
        passwordConfirmation
      );
      dispatch(editPasswordSuccess());
    } catch (ex) {
      console.log("error in profile: " + ex.message);
      dispatch(editPasswordError(ex.message));
    }
  };

export const requestPasswordReset = (data) => async (dispatch) => {
  try {
    const response = await UsersApi.requestOTP(data);

    dispatch(setResetPasswordSuccess(response?.result));

    return response?.result;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error requesting password";
    dispatch(setResetPasswordError(errorMessage));
    toast.error(errorMessage, toastConfig);
  }
};

export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await UsersApi.resetPassword(data);

    dispatch(setResetPasswordSuccess(response?.result));
    return response?.result;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error resetting password";
    toast.error(errorMessage, toastConfig);
  }
};

export const resetInitialProfile = (data) => async (dispatch) => {
  try {
    dispatch(resetProfile());
  } catch (error) {
    const errorMessage = "Error resetting profile";
    toast.error(errorMessage, toastConfig);
  }
};
