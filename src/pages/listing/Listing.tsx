import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { RowType } from "../../components/Table/Row/Row";
import Table from "../../components/Table/Table";
import Typography from "../../components/ui/Typography/Typography";
import { TABLE_THRESHOLD } from "../../constants";
import REDIRECTION_ROUTES from "../../constants/redirectionRoutes";
import { listingData, listingHeaders } from "../../data/listing";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";

const Listing = () => {
  // state
  const [data, setData] = useState<RowType[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const page = searchParams.get("page");
  const currentPage = page ? +page : 1;

  const getListingData = () => {
    setData(
      listingData.slice(
        TABLE_THRESHOLD * (currentPage - 1),
        TABLE_THRESHOLD * currentPage
      )
    );
    if (!totalPages) {
      setTotalPages(Math.ceil(listingData.length / TABLE_THRESHOLD));
    }
  };

  useEffect(() => {
    getListingData();
  }, [search]);

  return (
    <div>
      <Typography label="Entity listing" variant={TypographyVariantTypes.H2} />
      <Table
        headers={listingHeaders}
        data={data}
        setData={setData}
        currentPage={currentPage}
        totalPages={totalPages}
        rowClickRedirectionUrl={REDIRECTION_ROUTES.listing}
      />
    </div>
  );
};

export default Listing;
