import { User } from "./User";

export type Listing = {
  id: number;
  name: string;
  isFlagged: boolean;
  cin: string;
  tan: string;
  recentEditor: User;
  updatedOn: string;
};
