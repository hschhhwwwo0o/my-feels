import { initialUserStore } from "./initialStore";

function userReducer(state = initialUserStore, action: any): typeof initialUserStore {
  switch (action.type) {
    default:
      return state;
  }
}

export default userReducer;
