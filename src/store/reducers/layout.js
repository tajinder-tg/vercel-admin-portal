import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isCreatorMode:false
};

export const layoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		setCreatorMode: (state, action) => {
			state.isCreatorMode = action.payload;
		},
	},
});

export const {
	setCreatorMode
} = layoutSlice.actions;

export default layoutSlice.reducer;
