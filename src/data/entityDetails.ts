import { EntityDetails, EntityDetailsParent } from "../types/EntityDetails";
import userData from "./user";

export const dummyEntityDetails: EntityDetails = {
  head: "company-name",
  input: ["Tesla"],
  recentEditor: userData[0],
  updatedOn: "2024-04-24T10:42:02.712Z",
  previousChanges: [],
  isFlagged: false,
  isEditable: true,
};

const entitySectionData = [
  { ...dummyEntityDetails },
  { ...dummyEntityDetails, head: "cin", input: ["U2T2Y6U7IBG78"] },
  { ...dummyEntityDetails, head: "roc", input: ["ROC mumbai"] },
  { ...dummyEntityDetails, head: "date-of-inc", input: ["15/07/2023"] },
  {
    ...dummyEntityDetails,
    head: "email-id",
    input: ["finance@tesla.com", "admin@tesla.com", "support@tesla.com"],
  },
  {
    ...dummyEntityDetails,
    head: "registered-address",
    input: ["Ground floor, bandra"],
  },
  {
    ...dummyEntityDetails,
    head: "authorised-capital",
    input: ["50,00,00,000"],
  },
];

export const entityHeaders = {
  isFlagged: "",
  head: "Head",
  input: "Input",
  recentEditor: "Recent Editor",
  updatedOn: "Updated On",
  previousChanges: "Previous Changes",
  isEditable: "",
};

export const entityData: EntityDetailsParent = {
  overview: [...entitySectionData, ...entitySectionData],
  management: [...entitySectionData, ...entitySectionData],
  shareholding: [...entitySectionData, ...entitySectionData],
  docs: [...entitySectionData, ...entitySectionData],
  versions: [...entitySectionData, ...entitySectionData],
};
