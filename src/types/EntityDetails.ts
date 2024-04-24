import { User } from "./User";

export type EntityDetails = {
  head: string;
  input: string[];
  recentEditor: User;
  updatedOn: string;
  previousChanges: EntityDetails[];
  isFlagged: boolean;
  isEditable: boolean;
};

type EntityDetailsType<T extends string> = {
  [Key in T]: EntityDetails[];
};

export type EntityDetailsParent = EntityDetailsType<
  "overview" | "management" | "shareholding" | "docs" | "versions"
>;
