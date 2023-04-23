import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
import apidataReducer from "./post";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    post: apidataReducer,
  },
});
