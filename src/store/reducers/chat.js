import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMemberList: false,
	isError: false,
	memberList:[],
    isGroupChatList:false,
    groupChatList:[],
    isIndividualChatList:false,
    individualChatList:[],
	groupChatDetail:null,
	individualChatDetail:null,
};

export const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setMemberList: (state, action) => {
			state.memberList = action.payload;
			state.isMemberList = false;
			state.isError = false;
		},
        getMemberList: (state) => {
			state.isMemberList = true;
			state.isError = false;
		},
        setGroupChatList:(state,action)=>{
            state.groupChatList = action.payload;
			state.isGroupChatList = false;
			state.isError = false;
        },
        getGroupChatList: (state) => {
			state.isGroupChatList = true;
			state.isError = false;
		},
        setIndividualChatList:(state,action)=>{
            state.individualChatList = action.payload;
			state.isIndividualChatList = false;
			state.isError = false;
        },
        getIndividualList: (state) => {
			state.isIndividualChatList = true;
			state.isError = false;
		},
		setGroupChatDetail:(state,action)=>{
			state.groupChatDetail = action.payload;
			state.isGroupChatList = false;
			state.isError = false;
		},
		setIndividualChatDetail:(state,action)=>{
			state.individualChatDetail = action.payload;
			state.isIndividualChatList = false;
			state.isError = false;
		}
	},
});

export const {
	setMemberList,
	getMemberList,
    getGroupChatList,
    setGroupChatList,
    setIndividualChatList,
    getIndividualList,
	setGroupChatDetail,
	setIndividualChatDetail
} = chatSlice.actions;

export default chatSlice.reducer;
