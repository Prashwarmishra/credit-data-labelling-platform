import { Navigate } from "react-router-dom";
import REDIRECTION_ROUTES from "../../constants/redirectionRoutes";
import useAuth from "../../hooks/useAuth";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to={REDIRECTION_ROUTES.login} />;

  return children;
};

export default ProtectedRoute;
