import { Outlet } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../components/Sidebar/Sidebar";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <div className={s.root}>
      <Sidebar />
      <div className={s.right}>
        <Breadcrumb />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
