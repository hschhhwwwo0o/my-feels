import { initialUserStore } from "./initialStore";

function userReducer(state = initialUserStore, action: any): typeof initialUserStore {
  switch (action.type) {
    case "SET_USER":
      return {
        ...action.payload,
      };
    case "LOGOUT_USER":
      return initialUserStore;
    default:
      return state;
  }
}

export default userReducer;
