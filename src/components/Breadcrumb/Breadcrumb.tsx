import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

import s from "./Breadcrumb.module.scss";

const Breadcrumb = () => {
  // custom hooks
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((item) => item);
  let path = "";

  return (
    <div className={s.root}>
      {pathnames.map((item, index) => {
        path += "/" + item;
        return (
          <div key={item + index} className={s.crumb}>
            <Link
              to={path}
              style={{
                color: "#0052cc",
                textDecoration: "none",
                paddingRight: 4,
                textTransform: "capitalize",
              }}
            >
              {item}
            </Link>
            {index !== pathnames.length - 1 && (
              <FontAwesomeIcon icon={faArrowRight} size="2xs" color="#0052cc" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
