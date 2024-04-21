import {
  IconDefinition,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import REDIRECTION_ROUTES from "../../constants/redirectionRoutes";
import s from "./Sidebar.module.scss";

type PageType = {
  path: string;
  icon: IconDefinition;
};

const pages: PageType[] = [
  {
    path: REDIRECTION_ROUTES.listing,
    icon: faList,
  },
  {
    path: REDIRECTION_ROUTES.details,
    icon: faUser,
  },
];

const Sidebar = () => {
  const renderPages = (page: PageType) => (
    <NavLink
      key={page.path}
      to={page.path}
      className={({ isActive }) => (isActive ? s.activeTab : s.tab)}
    >
      <FontAwesomeIcon icon={page.icon} size="lg" color="white" />
    </NavLink>
  );

  return (
    <div className={s.root}>
      <div className={s.pages}>{pages.map((page) => renderPages(page))}</div>
      <div className={s.actions}>
        <div className={s.config}>config</div>
        <div className={s.profile}>profile</div>
      </div>
    </div>
  );
};

export default Sidebar;
