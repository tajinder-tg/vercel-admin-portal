import { configureStore } from "@reduxjs/toolkit";

import auth from "../reducers/auth";
import signUp from "../reducers/signUp";
import profile from "../reducers/profile";
import chat from "../reducers/chat";
import layout from "../reducers/layout";
import userProfile from "../reducers/userProfile";
import interest from "../reducers/interest";
import user from "../reducers/user";
import creatorRequest from "../reducers/creatorRequest";
const store = configureStore({
  reducer: {
    auth,
    signUp,
    profile,
    chat,
    layout,
    userProfile,
    interest,
    user,
    creatorRequest,
  },
});

export default store;
