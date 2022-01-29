import { NextRouter } from "next/router";
import { TypedDispatch } from "redux";
import feathersClient from "utils/feathers";

export function setNotes(router: NextRouter) {
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
      if (router.query.id) {
        dispatch({
          type: "SET_CURRENT_NOTE",
          payload: {
            _id: router.query.id,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function removeNote() {
  return async function (dispatch: TypedDispatch, getState: () => any) {
    try {
      await feathersClient.reAuthenticate();
      await feathersClient.service("notes").remove(getState().notes.currentNote._id);
      dispatch({ type: "REMOVE_NOTE", payload: { _id: getState().notes.currentNote._id } });
    } catch (error) {
      console.error(error);
    }
  };
}

export function addNote(title: string, authorID: string, router: NextRouter) {
  return async function (dispatch: TypedDispatch) {
    try {
      await feathersClient.reAuthenticate();
      const response = await feathersClient.service("notes").create({
        title,
        authorID,
        text: "",
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

export function saveNote(title: string, text: string, isPinned: boolean, emojies: string[]) {
  return async function (dispatch: TypedDispatch, getState: () => any) {
    try {
      await feathersClient.reAuthenticate();
      const response = await feathersClient.service("notes").patch(getState().notes.currentNote._id, {
        title,
        text,
        isPinned,
        emojies,
      });
      dispatch({
        type: "SAVE_NOTE",
        payload: {
          note: {
            ...response,
          },
          isPinned,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function pinNote(isPinned: boolean) {
  return async function (dispatch: TypedDispatch, getState: () => any) {
    try {
      await feathersClient.reAuthenticate();
      const response: any = await feathersClient.service("notes").patch(getState().notes.currentNote._id, {
        isPinned,
      });
      dispatch({
        type: "PIN_NOTE",
        payload: {
          note: response,
          _id: response._id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
}
