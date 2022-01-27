export interface INotesStore {
  notes: INote[];
  pinnedNotes: INote[];
}

export const initialNotesStore: INotesStore = {
  notes: [],
  pinnedNotes: [],
};
