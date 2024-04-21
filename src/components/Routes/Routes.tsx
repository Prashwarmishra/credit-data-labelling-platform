import { createBrowserRouter } from "react-router-dom";
import REDIRECTION_ROUTES from "../../constants/redirectionRoutes";
import Details from "../../pages/details/Details";
import Error from "../../pages/error/Error";
import Home from "../../pages/home/Home";
import Listing from "../../pages/listing/Listing";
import Login from "../../pages/login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Routes = createBrowserRouter([
  {
    path: REDIRECTION_ROUTES.home,
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: REDIRECTION_ROUTES.listing,
        element: (
          <ProtectedRoute>
            <Listing />
          </ProtectedRoute>
        ),
      },
      {
        path: REDIRECTION_ROUTES.details,
        element: (
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: REDIRECTION_ROUTES.login,
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default Routes;
