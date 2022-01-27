import { TypedDispatch } from "redux";
import feathersClient from "utils/feathers";

export function setNotes() {
  return async function (dispatch: TypedDispatch) {
    try {
      const response = await feathersClient.service("notes").find({
        query: {
          $limit: 50,
          $sort: {
            createdAt: -1,
          },
        },
      });
      dispatch({
        type: "SET_NOTES",
        payload: {
          notes: response.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function removeNote(id: string) {
  return async function (dispatch: TypedDispatch) {
    try {
      await feathersClient.service("notes").remove(id);
      dispatch({ type: "REMOVE_NOTE", payload: { _id: id } });
    } catch (error) {
      console.error(error);
    }
  };
}

export function addNote(title: string) {
  return async function (dispatch: TypedDispatch) {
    try {
      const response = await feathersClient.service("notes").create({
        title,
      });
      dispatch({
        type: "ADD_NOTE",
        payload: {
          note: response,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
}
