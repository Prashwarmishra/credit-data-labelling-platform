import Table from "../../components/Table/Table";
import Typography from "../../components/ui/Typography/Typography";
import { entityData, entityHeaders } from "../../data/entityDetails";
import useFetchData from "../../hooks/useFetchData";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";

const EntityDetails = () => {
  // custom hooks
  const { data, setData, currentPage, totalPages } = useFetchData(
    entityData.overview
  );

  return (
    <div>
      <Typography
        label="Tesla India corp."
        variant={TypographyVariantTypes.H2}
      />
      <Table
        headers={entityHeaders}
        data={data}
        setData={setData}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default EntityDetails;
