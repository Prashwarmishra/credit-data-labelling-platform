import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { RowType } from "../components/Table/Row/Row";
import { getPaginatedData } from "../utils";

const useFetchData = (results: RowType[]) => {
  // state
  const [data, setData] = useState<RowType[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const page = searchParams.get("page");
  const currentPage = page ? +page : 1;

  const getListingData = () => {
    const { data, totalPages } = getPaginatedData(results, currentPage);
    setData(data);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    getListingData();
  }, [search]);

  return {
    data,
    setData,
    currentPage,
    totalPages,
  };
};

export default useFetchData;
