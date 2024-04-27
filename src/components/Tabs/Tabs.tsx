import classNames from "classnames";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";
import Typography from "../ui/Typography/Typography";
import s from "./Tabs.module.scss";

type TabsProps = {
  tabs: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const Tabs = ({ tabs, activeIndex, setActiveIndex }: TabsProps) => {
  return (
    <div className={s.root}>
      {tabs.map((tab: string, index: number) => (
        <div
          className={classNames(s.tab, {
            [s.activeTab]: index === activeIndex,
          })}
          onClick={() => setActiveIndex(index)}
          key={`${tab}-${index}`}
        >
          <Typography
            label={tab}
            variant={TypographyVariantTypes.Big}
            customStyle={
              index === activeIndex
                ? { fontWeight: "bold", textTransform: "capitalize" }
                : { textTransform: "capitalize" }
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
