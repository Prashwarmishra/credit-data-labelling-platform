import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./pages/details/Details";
import Error from "./pages/error/Error";
import Listing from "./pages/listing/Listing";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Listing />,
    errorElement: <Error />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
