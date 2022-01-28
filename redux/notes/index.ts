import { initialNotesStore, INotesStore } from "./initialStore";

function notesReducer(state = initialNotesStore, action: any): INotesStore {
  switch (action.type) {
    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload.notes.filter((note: INote) => !note.isPinned),
        pinnedNotes: action.payload.notes.filter((note: INote) => note.isPinned),
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note: INote) => note._id !== action.payload._id),
        pinnedNotes: state.pinnedNotes.filter((note: INote) => note._id !== action.payload._id),
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [action.payload.note, ...state.notes],
        pinnedNotes: state.pinnedNotes,
      };
    case "PIN_NOTE":
      if (action.payload.note.isPinned) {
        return {
          ...state,
          notes: state.notes.filter((note: INote) => note._id !== action.payload._id),
          pinnedNotes: [action.payload.note, ...state.pinnedNotes],
        };
      } else {
        return {
          ...state,
          notes: [action.payload.note, ...state.notes],
          pinnedNotes: state.pinnedNotes.filter((note: INote) => note._id !== action.payload._id),
        };
      }
    case "SAVE_NOTE":
      if (action.payload.note.isPinned) {
        return {
          ...state,
          notes: state.notes,
          pinnedNotes: [
            action.payload.note,
            ...state.pinnedNotes.filter((note: INote) => note._id !== action.payload.note._id),
          ],
        };
      } else {
        return {
          ...state,
          notes: [action.payload.note, ...state.notes.filter((note: INote) => note._id !== action.payload.note._id)],
          pinnedNotes: state.pinnedNotes,
        };
      }
    case "SET_CURRENT_NOTE":
      const note: INote | undefined = state.notes.find((note: INote) => note._id === action.payload._id);
      const pinnedNote: INote | undefined = state.pinnedNotes.find((note: INote) => note._id === action.payload._id);
      const currentNote: any = note ? note : pinnedNote;

      return {
        ...state,
        currentNote: currentNote ? currentNote : {},
      };
    default:
      return state;
  }
}

export default notesReducer;
