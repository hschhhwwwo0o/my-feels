import { NextRouter } from "next/router";
import { TypedDispatch, TypedState } from "redux";
import feathersClient from "utils/feathers";

export function createAnAccount(email: string, password: string, router: NextRouter, _errorCallback: () => any) {
  return async function (dispatch: TypedDispatch) {
    try {
      await feathersClient.service("users").create({
        email,
        password,
      });
      const { user } = await feathersClient.authenticate({
        email,
        password,
        strategy: "local",
      });
      dispatch({ type: "SET_USER", payload: user });
      router.push("/meet");
    } catch (error) {
      _errorCallback();
      console.error(error);
    }
  };
}

export function reAuthenticate(router: NextRouter) {
  return async function (dispatch: TypedDispatch) {
    try {
      const { user } = await feathersClient.reAuthenticate();
      dispatch({ type: "SET_USER", payload: user });
    } catch (error) {
      console.error(error);
      router.push("/create-an-account");
    }
  };
}

export function logout(router: NextRouter) {
  return async function (dispatch: TypedDispatch) {
    try {
      await feathersClient.logout();
      dispatch({ type: "LOGOUT_USER" });
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
}

export function login(email: string, password: string, router: NextRouter, _errorCallback: () => any) {
  return async function (dispatch: TypedDispatch) {
    try {
      const { user } = await feathersClient.authenticate({
        email,
        password,
        strategy: "local",
      });
      dispatch({ type: "SET_USER", payload: user });
      router.push("/");
    } catch (error) {
      _errorCallback();
      console.error(error);
    }
  };
}

export function changeTheme(theme: "dark" | "light") {
  return async function (dispatch: TypedDispatch, getState: () => TypedState) {
    try {
      dispatch({ type: "CHANGE_USER_THEME", payload: theme });
      await feathersClient.service("users").patch(getState().user._id, {
        theme,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function patchUser(email: string, password: string, firstName: string, lastName: string) {
  return async function (dispatch: TypedDispatch, getState: () => TypedState) {
    try {
      dispatch({
        type: "SET_USER",
        payload: {
          email,
          password,
          firstName,
          lastName,
        },
      });
      await feathersClient.service("users").patch(getState().user._id, {
        email,
        password,
        firstName,
        lastName,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function meetUser(firstName: string, lastName: string) {
  return async function (dispatch: TypedDispatch, getState: () => TypedState) {
    try {
      dispatch({
        type: "MEET_USER",
        payload: {
          firstName,
          lastName,
        },
      });
      await feathersClient.service("users").patch(getState().user._id, {
        firstName,
        lastName,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function removeUser() {
  return async function (dispatch: TypedDispatch, getState: () => TypedState) {
    try {
      dispatch({
        type: "LOGOUT_USER",
      });
      await feathersClient.service("users").remove(getState().user._id);
    } catch (error) {
      console.error(error);
    }
  };
}
