import { ApiUrl } from "src/Api";
import { CheckResponse } from "src/utils/CheckResponse";
import { get } from "src/utils/Constant";
import {
  interestListError,
  interestListInit,
  interestListSuccess,
} from "../reducers/interest";

export const getInterestList = () => async (dispatch: any) => {
  try {
    dispatch(interestListInit());
    const res = await get(ApiUrl.interest);
    const response = await CheckResponse(res);
    if (response.success) {
      dispatch(interestListSuccess(response?.data));
    } else {
      dispatch(interestListError(response));
    }
  } catch (ex) {
    console.log(ex);
  }
};
