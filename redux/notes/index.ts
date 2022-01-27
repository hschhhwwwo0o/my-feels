import { initialNotesStore, INotesStore } from "./initialStore";

function notesReducer(state = initialNotesStore, action: any): INotesStore {
  switch (action.type) {
    case "SET_NOTES":
      return {
        notes: action.payload.notes.filter((note: INote) => !note.isPinned),
        pinnedNotes: action.payload.notes.filter((note: INote) => note.isPinned),
      };
    case "REMOVE_NOTE":
      return {
        notes: state.notes.filter((note: INote) => note._id !== action.payload._id),
        pinnedNotes: state.pinnedNotes.filter((note: INote) => note._id !== action.payload._id),
      };
    case "ADD_NOTE":
      return {
        notes: [action.payload.note, ...state.notes],
        pinnedNotes: state.pinnedNotes,
      };
    case "PIN_NOTE":
      return {
        notes: state.notes.filter((note: INote) => note._id !== action.payload._id),
        pinnedNotes: [action.payload.note, ...state.pinnedNotes],
      };
    case "SAVE_NOTE":
      if (action.payload.note.isPinned) {
        return {
          notes: state.notes,
          pinnedNotes: [action.payload.note, ...state.pinnedNotes],
        };
      } else {
        return {
          notes: [action.payload.note, ...state.notes],
          pinnedNotes: state.pinnedNotes,
        };
      }
    default:
      return state;
  }
}

export default notesReducer;
