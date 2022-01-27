export interface INotesStore {
  notes: INote[];
  pinnedNotes: INote[];
  currentNote: INote;
}

export const initialNotesStore: INotesStore = {
  notes: [],
  pinnedNotes: [],
  currentNote: {
    title: "",
    text: "",
    authorID: "",
    emojies: [],
    isPinned: false,
    createdAt: "",
    updatedAt: "",
    _id: "",
  },
};
