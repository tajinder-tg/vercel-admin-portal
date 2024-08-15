import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreatorRequestList: false,
  error: null,
  success: false,
  creatorRequestList: [],
};
export const creatorRequest = createSlice({
  name: "creatorRequest",
  initialState,
  reducers: {
    creatorRequestInit: (state) => {
      state.isCreatorRequestList = true;
    },
    creatorRequestSuccess: (state, action) => {
      state.isCreatorRequestList = false;
      state.creatorRequestList = action?.payload?.data;
      state.success = true;
    },
    creatorRequestError: (state, action) => {
      state.success = false;
      state.isCreatorRequestList = false;
      state.creatorRequestList = [];
      state.error = action?.payload;
    },
    updateCreatorStatus: (state, action) => {
      let creatorIndex = state.creatorRequestList.findIndex(
        (item: any) => item.id == action.payload?.user_id
      );
      let cloneCreator: any = [...state.creatorRequestList];
      if (creatorIndex !== -1) {
        cloneCreator[creatorIndex].creator_status = action.payload.status;
      }
      state.isCreatorRequestList = false;
      state.creatorRequestList = cloneCreator;
      state.success = true;
    },
  },
});

export const {
  creatorRequestInit,
  creatorRequestSuccess,
  creatorRequestError,
  updateCreatorStatus,
} = creatorRequest.actions;

export default creatorRequest.reducer;
