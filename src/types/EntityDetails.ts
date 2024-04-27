import { User } from "./User";

export interface BasicEntityDetails {
  head: string;
  input: string[];
  recentEditor: User;
  updatedOn: string;
}

export interface EntityDetails extends BasicEntityDetails {
  previousChanges: BasicEntityDetails[];
  isFlagged: boolean;
  isEditable: boolean;
}

type EntityDetailsType<T extends string> = {
  [Key in T]: EntityDetails[];
};

export type EntityDetailsParent = EntityDetailsType<
  "overview" | "management" | "shareholding" | "docs" | "versions"
>;
