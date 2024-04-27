import { Listing } from "../types/Listing";
import userData from "./user";

export const listingHeaders = {
  isFlagged: "",
  id: "Entity Id",
  name: "Entity Name",
  cin: "CIN",
  tan: "TAN Number",
  recentEditor: "Recent Editor",
  updatedOn: "Updated On",
};

export const listingData: Listing[] = [
  {
    id: 111,
    name: "Tesla",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
    recentEditor: { ...userData[0] },
    updatedOn: "2024-04-27T13:49:41.915Z",
  },
  {
    id: 112,
    name: "Amazon",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
    recentEditor: { ...userData[1] },
    updatedOn: "2024-04-27T13:49:41.915Z",
  },
  {
    id: 113,
    name: "Netflix",
    isFlagged: true,
    cin: "123456789",
    tan: "JCPM08078C",
    recentEditor: { ...userData[2] },
    updatedOn: "2024-04-27T13:49:41.915Z",
  },
  {
    id: 114,
    name: "Apple",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
    recentEditor: { ...userData[3] },
    updatedOn: "2024-04-27T13:49:41.915Z",
  },
  {
    id: 115,
    name: "Microsoft",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
    recentEditor: { ...userData[2] },
    updatedOn: "2024-04-27T13:49:41.915Z",
  },
  {
    id: 116,
    name: "Tata",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
    recentEditor: { ...userData[0] },
    updatedOn: "2024-04-27T13:49:41.915Z",
  },

  {
    id: 117,
    name: "Reliance",
    isFlagged: true,
    cin: "123456789",
    tan: "JCPM08078C",
    recentEditor: { ...userData[1] },
    updatedOn: "2024-04-27T13:49:41.915Z",
  },
];
