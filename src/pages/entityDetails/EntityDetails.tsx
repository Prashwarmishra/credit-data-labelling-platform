import { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table/Table";
import Tabs from "../../components/Tabs/Tabs";
import Typography from "../../components/ui/Typography/Typography";
import { entityData, entityHeaders } from "../../data/entityDetails";
import useFetchData from "../../hooks/useFetchData";
import usePageChange from "../../hooks/usePageChange";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";

const EntityDetails = () => {
  const tabs = useMemo(
    () => Object.keys(entityData).map((key) => key),
    [entityData]
  );

  // @ts-ignore
  const getActiveTabData = () => entityData[tabs[activeIndex]];

  // custom hooks
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, setData, setSourceData, currentPage, totalPages } =
    useFetchData(getActiveTabData());
  const { handlePageChange } = usePageChange();

  useEffect(() => {
    setSourceData(getActiveTabData());
    handlePageChange(1);
  }, [activeIndex]);

  return (
    <div>
      <Typography
        label="Tesla India corp."
        variant={TypographyVariantTypes.H2}
      />
      <Tabs
        tabs={tabs}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
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
