import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import notesReducer from "./notes";

export type IStore = {
  user: IUser;
  notes: {
    pinnedNotes: INote[];
    notes: INote[];
    currentNote: INote;
  };
};

type IStoreReducer = EnhancedStore<IStore>;

const store: IStoreReducer = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
  },
});

export type IPromisedThunk = (dispatch?: TypedDispatch, getState?: any) => Promise<void>;
export type TypedState = any;
export type TypedDispatch = typeof store.dispatch;

export default store;
