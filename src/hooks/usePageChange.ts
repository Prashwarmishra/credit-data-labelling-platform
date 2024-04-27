import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePageChange = () => {
  // custom hooks
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const handlePageChange = (pageNumber: number) => {
    searchParams.set("page", pageNumber.toString());
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };

  return {
    handlePageChange,
  };
};

export default usePageChange;
