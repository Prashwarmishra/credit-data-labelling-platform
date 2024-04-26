import { EntityDetails, EntityDetailsParent } from "../types/EntityDetails";
import { getDeepCopy } from "../utils";
import userData from "./user";

export const dummyEntityDetails: EntityDetails = {
  head: "company-name",
  input: ["Tesla"],
  recentEditor: { ...userData[0] },
  updatedOn: "2024-04-24T10:42:02.712Z",
  previousChanges: [],
  isFlagged: false,
  isEditable: true,
};

const entitySectionData = [
  { ...dummyEntityDetails },
  {
    ...dummyEntityDetails,
    head: "cin",
    input: ["U2T2Y6U7IBG78"],
    recentEditor: { ...userData[1] },
  },
  {
    ...dummyEntityDetails,
    head: "roc",
    input: ["ROC mumbai"],
    recentEditor: { ...userData[2] },
  },
  {
    ...dummyEntityDetails,
    head: "date-of-inc",
    input: ["15/07/2023"],
    recentEditor: { ...userData[0] },
  },

  {
    ...dummyEntityDetails,
    head: "email-id",
    input: ["finance@tesla.com", "admin@tesla.com", "support@tesla.com"],
    recentEditor: { ...userData[3] },
  },
  {
    ...dummyEntityDetails,
    head: "registered-address",
    input: ["Ground floor, bandra"],
    recentEditor: { ...userData[4] },
  },
  {
    ...dummyEntityDetails,
    head: "authorised-capital",
    input: ["500000000"],
    recentEditor: { ...userData[1] },
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
  overview: [
    ...getDeepCopy(entitySectionData),
    ...getDeepCopy(entitySectionData),
  ],
  management: [
    ...getDeepCopy(entitySectionData),
    ...getDeepCopy(entitySectionData),
  ],
  shareholding: [
    ...getDeepCopy(entitySectionData),
    ...getDeepCopy(entitySectionData),
  ],
  docs: [...getDeepCopy(entitySectionData), ...getDeepCopy(entitySectionData)],
  versions: [
    ...getDeepCopy(entitySectionData),
    ...getDeepCopy(entitySectionData),
  ],
};
