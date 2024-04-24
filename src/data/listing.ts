import { Listing } from "../types/Listing";

export const listingHeaders = {
  isFlagged: "",
  id: "Entity Id",
  name: "Entity Name",
  cin: "CIN",
  tan: "TAN Number",
};

export const listingData: Listing[] = [
  {
    id: 111,
    name: "Tesla",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
  },
  {
    id: 112,
    name: "Amazon",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
  },
  {
    id: 113,
    name: "Netflix",
    isFlagged: true,
    cin: "123456789",
    tan: "JCPM08078C",
  },
  {
    id: 114,
    name: "Apple",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
  },
  {
    id: 115,
    name: "Microsoft",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
  },
  {
    id: 116,
    name: "Tata",
    isFlagged: false,
    cin: "123456789",
    tan: "JCPM08078C",
  },

  {
    id: 117,
    name: "Reliance",
    isFlagged: true,
    cin: "123456789",
    tan: "JCPM08078C",
  },
];
