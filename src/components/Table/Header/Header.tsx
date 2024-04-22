import s from "./Header.module.scss";

export interface HeaderType {
  [key: string]: string;
}

type HeaderProps = {
  headerData: string;
};

const Header = ({ headerData }: HeaderProps) => {
  return <th className={s.root}>{headerData}</th>;
};

export default Header;
