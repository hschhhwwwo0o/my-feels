import { NextRouter } from "next/router";
import { IPromisedThunk, TypedDispatch, TypedState } from "redux";
import feathersClient from "utils/feathers";

export function createAnAccount(
  email: string,
  password: string,
  router: NextRouter,
  _errorCallback: () => any
): IPromisedThunk {
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

export function reAuthenticate(router: NextRouter, _callback: () => void): IPromisedThunk {
  return async function (dispatch: TypedDispatch) {
    try {
      const { user } = await feathersClient.reAuthenticate();
      dispatch({ type: "SET_USER", payload: user });
      _callback();
    } catch (error) {
      console.error(error);
      router.push("/create-an-account");
      _callback();
    }
  };
}

export function logout(router: NextRouter): IPromisedThunk {
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

export function login(email: string, password: string, router: NextRouter, _errorCallback: () => any): IPromisedThunk {
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

export function changeTheme(theme: "dark" | "light"): IPromisedThunk {
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

export function patchUser(email: string, password: string, firstName: string, lastName: string): IPromisedThunk {
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
      const query: any = {
        email,
        firstName,
        lastName,
      };
      password ? (query.password = password) : null;
      await feathersClient.service("users").patch(getState().user._id, query);
    } catch (error) {
      console.error(error);
    }
  };
}

export function meetUser(firstName: string, lastName: string): IPromisedThunk {
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

export function removeUser(): IPromisedThunk {
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
