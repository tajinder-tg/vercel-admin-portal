import { ApiUrl } from "src/Api";
import { CheckResponse } from "src/utils/CheckResponse";
import {
  get,
  postImage,
  removeTempUser,
  setCurrentUser,
} from "src/utils/Constant";
import {
  getUserProfileError,
  getUserProfileInit,
  getUserProfileSuccess,
  uploadImageError,
  uploadImageInit,
  uploadImageSuccess,
} from "../reducers/userProfile";

export const getUserProfile = (params?: any) => async (dispatch: any) => {
  try {
    dispatch(getUserProfileInit());
    const res = await get(ApiUrl.getAdminDetail, params);
    const response = await CheckResponse(res);
    if (response.success) {
      dispatch(getUserProfileSuccess(response?.data));
    } else {
      dispatch(getUserProfileError(response));
    }
  } catch (ex) {
    console.log(ex);
  }
};
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
