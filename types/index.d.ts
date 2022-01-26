type IID = string;
type IEmoji = "love" | "cry" | "stars" | "nice";
type ITheme = "light" | "dark";
type ITimeStamp = string;

interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  theme: ITheme;
  createdAt: ITimeStamp;
  updatedAt: ITimeStamp;
  __v: string | number;
  _id: string;
}
interface INote {
  title: string;
  text: string;
  authorID: IID;
  emojies: IEmoji[];
  isPinned: boolean;
  createdAt: ITimeStamp;
  updatedAt: ITimeStamp;
}
