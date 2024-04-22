import { createBrowserRouter } from "react-router-dom";
import REDIRECTION_ROUTES from "../../constants/redirectionRoutes";
import Details from "../../pages/details/Details";
import Error from "../../pages/error/Error";
import Help from "../../pages/help/Help";
import Home from "../../pages/home/Home";
import Inbox from "../../pages/inbox/Inbox";
import Listing from "../../pages/listing/Listing";
import Login from "../../pages/login/Login";
import Settings from "../../pages/settings/Settings";
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
        element: <Listing />,
      },
      {
        path: REDIRECTION_ROUTES.details,
        element: <Details />,
      },
      {
        path: REDIRECTION_ROUTES.inbox,
        element: <Inbox />,
      },
      {
        path: REDIRECTION_ROUTES.help,
        element: <Help />,
      },
      {
        path: REDIRECTION_ROUTES.settings,
        element: <Settings />,
      },
    ],
  },
  {
    path: REDIRECTION_ROUTES.login,
    element: <Login />,
  },
]);

export default Routes;
