import {
  setMemberList,
	getMemberList,
    getGroupChatList,
    setGroupChatList,
    setIndividualChatList,
    getIndividualList,
	setGroupChatDetail,
	setIndividualChatDetail
  } from "../reducers/chat";
  
  export const getMemberListAction = (data) => async(dispatch) => {
    try {
      dispatch(getMemberList());
      dispatch(setMemberList(data)) 
    } catch (error) {
      console.log(error);
    }
  };

  export const getGroupChatListAction = (data) => async(dispatch) => {
    try {
      dispatch(getGroupChatList());
      dispatch(setGroupChatList(data)) 
    } catch (error) {
      console.log(error);
    }
  };

  export const getIndividualChatListAction = (data) => async(dispatch) => {
    try {
      dispatch(getIndividualList());
      dispatch(setIndividualChatList(data)) 
    } catch (error) {
      console.log(error);
    }
  };

  export const getGroupChatDetailAction = (data) => async(dispatch) => {
    try {
      dispatch(getGroupChatList());
      dispatch(setGroupChatDetail(data)) 
    } catch (error) {
      console.log(error);
    }
  };

  export const getIndividualChatDetailAction = (data) => async(dispatch) => {
    try {
      dispatch(getIndividualList());
      dispatch(setIndividualChatDetail(data)) 
    } catch (error) {
      console.log(error);
    }
  };
