import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import notesReducer from "./notes";

type IStore = EnhancedStore<{
  user: IUser;
}>;

const store: IStore = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
  },
});

export type TypedDispatch = typeof store.dispatch;

export default store;
