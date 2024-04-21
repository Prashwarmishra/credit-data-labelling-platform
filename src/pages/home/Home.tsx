import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import s from "./Home.module.scss";

const Home = () => {
  return (
    <div className={s.root}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
