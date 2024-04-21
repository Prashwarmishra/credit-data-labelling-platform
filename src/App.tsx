import { RouterProvider } from "react-router-dom";

import s from "./App.module.scss";
import Routes from "./components/Routes/Routes";

function App() {
  return (
    <div className={s.root}>
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
