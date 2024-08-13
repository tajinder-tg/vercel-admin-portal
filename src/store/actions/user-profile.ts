import { ApiUrl } from "src/Api";
import { CheckResponse } from "src/utils/CheckResponse";
import {
  constants,
  postImage,
  postWithoutToken,
  removeTempUser,
  setCurrentUser,
} from "src/utils/Constant";
import {
  uploadImageError,
  uploadImageInit,
  uploadImageSuccess,
  uploadUserProfileError,
  uploadUserProfileInit,
  uploadUserProfileSuccess,
} from "../reducers/userProfile";

export const uploadProfile = (data: any) => async (dispatch: any) => {
  try {
    dispatch(uploadImageInit());
    const res = await postImage(ApiUrl.FileUpload, data);
    const response = await CheckResponse(res);
    if (response.success) {
      dispatch(uploadImageSuccess(response?.data));
      return response?.data;
    } else {
      dispatch(uploadImageError(response));
    }
  } catch (ex) {
    console.log(ex);
  }
};

export const postUserProfile = (data: any) => async (dispatch: any) => {
  try {
    dispatch(uploadUserProfileInit());
    const res = await postWithoutToken(
      `${constants.apiBaseUrl}${ApiUrl.register}`,
      data
    );
    const response = await CheckResponse(res);
    if (response.success) {
      removeTempUser();
      setCurrentUser(response?.data?.data);
      dispatch(uploadUserProfileSuccess(response?.data));
    } else {
      dispatch(uploadUserProfileError(response));
    }
  } catch (ex) {
    console.log(ex);
  }
};
