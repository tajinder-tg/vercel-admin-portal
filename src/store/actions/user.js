import { Encrypt, get, post, put } from "../../utils/Constant";
import { toast } from "react-hot-toast";

import {
  getUserDetailInit,
  getUserListInit,
  getUserDetailSuccess,
  getUserListSuccess,
  getUserListError,
  getUserDetailError,
} from "../reducers/user";
import { CheckResponse } from "src/utils/CheckResponse";
import { ApiUrl } from "src/Api";

export const getUserDetailsAction = (payload) => async (dispatch) => {
  try {
    dispatch(getUserDetailInit());
    // const EncryptedPayload=Encrypt(payload)
    const response = await get(ApiUrl.getUserDetail, payload);
    const filteredResponse = CheckResponse(response);
    if (filteredResponse?.success) {
      dispatch(getUserDetailSuccess(filteredResponse?.data?.data));
    } else {
      dispatch(getUserDetailError(filteredResponse));
    }
  } catch (error) {
    toast.error(error.message, {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
};

export const getUserListAction = (payload) => async (dispatch) => {
  try {
    dispatch(getUserListInit());
    // const EncryptedPayload=Encrypt(payload)
    const response = await get(ApiUrl.getUserList, payload);
    const filteredResponse = CheckResponse(response);
    if (filteredResponse?.success) {
      dispatch(getUserListSuccess(filteredResponse?.data?.data));
    } else {
      dispatch(getUserListError(filteredResponse));
    }
  } catch (error) {
    toast.error(error.message, {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
};

export const updateUserStateAction = (payload) => async (dispatch) => {
  try {
    const response = await post(ApiUrl.creatorRequest, payload);
    if (
      response?.data?.status_code == 200 ||
      response?.data?.status_code == 201
    ) {
      toast.success(response?.data?.message, {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.error(response?.data?.message, {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  } catch (error) {
    toast.error(error?.message, {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
};
