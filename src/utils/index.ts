import { TABLE_THRESHOLD } from "../constants";

export const getPaginatedData = (data: any[], page: number) => {
  return {
    data: data.slice(TABLE_THRESHOLD * (page - 1), TABLE_THRESHOLD * page),
    totalPages: Math.ceil(data.length / TABLE_THRESHOLD),
  };
};
