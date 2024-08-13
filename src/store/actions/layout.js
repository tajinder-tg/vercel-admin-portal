import { setCreatorMode } from "../reducers/layout";

export const CreatorModeAction = (data) => async(dispatch) => {
    try {
      dispatch(setCreatorMode(data)) 
    } catch (error) {
      console.log(error);
    }
  }