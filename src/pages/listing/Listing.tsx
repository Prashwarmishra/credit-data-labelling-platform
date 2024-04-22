import { useState } from "react";
import { RowType } from "../../components/Table/Row/Row";
import Table from "../../components/Table/Table";
import Typography from "../../components/ui/Typography/Typography";
import { listingData, listingHeaders } from "../../data/listing";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";

const Listing = () => {
  // state
  const [data, setData] = useState<RowType[]>(listingData);

  return (
    <div>
      <Typography label="Entity listing" variant={TypographyVariantTypes.H2} />
      <Table headers={listingHeaders} data={data} setData={setData} />
    </div>
  );
};

export default Listing;
