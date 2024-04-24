import Typography from "../../ui/Typography/Typography";
import s from "./Header.module.scss";

export interface HeaderType {
  [key: string]: string;
}

type HeaderProps = {
  headerData: string;
};

const Header = ({ headerData }: HeaderProps) => {
  return (
    <th className={s.root}>
      <Typography
        label={headerData}
        customStyle={{ color: "rgb(46, 45, 45)" }}
      />
    </th>
  );
};

export default Header;
