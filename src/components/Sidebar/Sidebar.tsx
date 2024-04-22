import {
  IconDefinition,
  faGear,
  faLifeRing,
  faList,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import REDIRECTION_ROUTES from "../../constants/redirectionRoutes";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";
import { User } from "../../types/User";
import { getUserCredentials, logoutUser } from "../../utils/authentication";
import Modal from "../ui/Modal/Modal";
import Typography from "../ui/Typography/Typography";
import s from "./Sidebar.module.scss";

type TabType = {
  path: string;
  icon: IconDefinition;
};

const pages: TabType[] = [
  {
    path: REDIRECTION_ROUTES.listing,
    icon: faList,
  },
  {
    path: REDIRECTION_ROUTES.inbox,
    icon: faMessage,
  },
];

const config: TabType[] = [
  {
    path: REDIRECTION_ROUTES.help,
    icon: faLifeRing,
  },
  {
    path: REDIRECTION_ROUTES.settings,
    icon: faGear,
  },
];

const userProfile: User = getUserCredentials();

const Sidebar = () => {
  // state
  const [showProfile, setShowProfile] = useState(false);

  // custom hooks
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate(REDIRECTION_ROUTES.login);
  };

  const renderTabs = (tab: TabType) => (
    <NavLink
      key={tab.path}
      to={tab.path}
      className={({ isActive }) => (isActive ? s.activeTab : s.tab)}
    >
      <FontAwesomeIcon icon={tab.icon} size="lg" color="white" />
    </NavLink>
  );

  console.log("userProfile", userProfile);
  return (
    <div className={s.root}>
      <div className={s.tabs}>{pages.map((page) => renderTabs(page))}</div>
      <div className={s.actions}>
        <div className={s.tabs}>
          {config.map((config) => renderTabs(config))}
        </div>
        <div className={s.tabs} onClick={() => setShowProfile(true)}>
          <div className={s.tab}>
            <FontAwesomeIcon icon={faUser} size="lg" color="white" />
          </div>
        </div>
      </div>

      <Modal
        show={showProfile}
        onClose={() => setShowProfile(false)}
        customStyle={{ position: "absolute", bottom: 12, left: 50 }}
      >
        <div className={s.profile}>
          {userProfile?.email && (
            <div className={s.email}>
              <Typography
                label={userProfile.email}
                customStyle={{ cursor: "pointer" }}
              />
            </div>
          )}

          <div className={s.logout}>
            <Typography
              label="Logout"
              variant={TypographyVariantTypes.Medium}
              customStyle={{ cursor: "pointer" }}
              onClick={handleLogout}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
