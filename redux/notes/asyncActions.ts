import { NextRouter } from "next/router";
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

export function addNote(title: string, authorID: string, router: NextRouter) {
  return async function (dispatch: TypedDispatch) {
    try {
      const response = await feathersClient.service("notes").create({
        title,
        authorID,
      });
      dispatch({
        type: "ADD_NOTE",
        payload: {
          note: response,
        },
      });
      router.push(`/note/${response._id}`);
    } catch (error) {
      console.error(error);
    }
  };
}
