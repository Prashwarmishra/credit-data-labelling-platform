import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import s from "./App.module.scss";
import Routes from "./components/Routes/Routes";

function App() {
  return (
    <div className={s.root}>
      <RouterProvider router={Routes} />

      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
