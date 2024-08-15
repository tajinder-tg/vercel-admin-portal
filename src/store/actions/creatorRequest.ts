import toast from "react-hot-toast";
import { ApiUrl } from "src/Api";
import { CheckResponse } from "src/utils/CheckResponse";
import { get, post } from "src/utils/Constant";
import {
  creatorRequestError,
  creatorRequestInit,
  creatorRequestSuccess,
  updateCreatorStatus,
} from "../reducers/creatorRequest";

export const getCreatorRequestList =
  (params?: any) => async (dispatch: any) => {
    try {
      dispatch(creatorRequestInit());
      const res = await get(ApiUrl.getCreatorRequest, params);
      const response = await CheckResponse(res);
      if (response.success) {
        dispatch(creatorRequestSuccess(response?.data));
      } else {
        dispatch(creatorRequestError(response));
      }
    } catch (ex) {
      console.log(ex);
    }
  };

export const updateUserStateAction =
  (payload: any) => async (dispatch: any) => {
    try {
      const response: any = await post(ApiUrl.creatorRequest, payload);
      if (
        response?.data?.status_code == 200 ||
        response?.data?.status_code == 201
      ) {
        dispatch(updateCreatorStatus(payload));
        toast.success(response?.data?.message, {
          duration: 2000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return response;
      } else {
        return response;
      }
    } catch (error: any) {
      console.log(error, "sjsdf");
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
