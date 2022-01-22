import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import userReducer from "./user";

type IStore = EnhancedStore<{
  user: IUser;
}>;

const store: IStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type TypedState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;

export default store;
