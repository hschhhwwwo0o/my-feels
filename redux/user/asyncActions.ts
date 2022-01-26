import { NextRouter } from "next/router";
import { TypedDispatch } from "redux";
import feathersClient from "utils/feathers";

export function createAnAccount(email: string, password: string, router: NextRouter) {
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
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
}

export function reAuthenticate(router: NextRouter) {
  return async function (dispatch: TypedDispatch) {
    try {
      const { user } = await feathersClient.reAuthenticate();
      dispatch({ type: "SET_USER", payload: user });
      router.push("/");
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

export function login(email: string, password: string, router: NextRouter) {
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
      console.error(error);
    }
  };
}
