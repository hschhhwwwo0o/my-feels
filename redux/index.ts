import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});

export type TypedState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;

export default store;
