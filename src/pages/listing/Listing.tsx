import Table from "../../components/Table/Table";
import Typography from "../../components/ui/Typography/Typography";
import REDIRECTION_ROUTES from "../../constants/redirectionRoutes";
import { listingData, listingHeaders } from "../../data/listing";
import useFetchData from "../../hooks/useFetchData";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";

const Listing = () => {
  // custom hooks
  const { data, setData, currentPage, totalPages } = useFetchData(listingData);

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
