import { toast } from "react-hot-toast";

import {
  loginInit,
  loginSuccess,
  loginError,
  logoutSuccess,
} from "../reducers/auth";
import { signUpInit, signUpSuccess, signUpError } from "../reducers/signUp";

import { setProfile } from "../reducers/profile";
import {
  constants,
  postWithoutToken,
  setCurrentUser,
  setTemporaryUser,
} from "src/utils/Constant";
import { CheckResponse } from "src/utils/CheckResponse";
import { ApiUrl } from "src/Api";

export const loginAttempt = (data: any) => async (dispatch: any) => {
  try {
    dispatch(loginInit());
    const response = await postWithoutToken(
      `${constants.apiBaseUrl}${ApiUrl.login}`,
      data
    );
    if (
      response?.data?.status_code == 200 ||
      response?.data?.status_code == 200
    ) {
      setCurrentUser(response.data?.data);
      toast.success(response?.data?.message, {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      dispatch(loginSuccess(response?.data));
    } else {
      toast.error(response?.data?.message, {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      dispatch(loginError(response));
    }
  } catch (ex: any) {
    dispatch(loginError(ex.message));
    ex.response?.data?.errors?.map((error: any) => {
      toast.error(`${error.msg}`, {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    });
  }
};

export const logout = () => async (dispatch: any) => {
  dispatch(logoutSuccess());
};

// export const setUser = () => async (dispatch) => {
// 	try {
// 		const response = await UsersApi.setUserData();

// 		dispatch(setProfile({ profile: response.result }));
// 	} catch (ex) {
// 		toast.error(`${ex.response?.data?.message}`, toastConfig);
// 	}
// };
