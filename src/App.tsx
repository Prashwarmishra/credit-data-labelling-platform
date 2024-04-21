import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import REDIRECTION_ROUTES from "./constants/redirectionRoutes";
import Details from "./pages/details/Details";
import Error from "./pages/error/Error";
import Listing from "./pages/listing/Listing";
import Login from "./pages/login/Login";

import s from "./App.module.scss";

const router = createBrowserRouter([
  {
    path: REDIRECTION_ROUTES.login,
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: REDIRECTION_ROUTES.details,
    element: (
      <ProtectedRoute>
        <Details />
      </ProtectedRoute>
    ),
  },
  {
    path: REDIRECTION_ROUTES.listing,
    element: (
      <ProtectedRoute>
        <Listing />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <div className={s.root}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
