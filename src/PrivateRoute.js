import { Navigate } from "react-router";
import { useAuth } from "./Auth/auth-context";
import { Route } from "react-router";
export const PrivateRoute = ({ path, ...props }) => {
  const { state } = useAuth();
  return state.login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} to='/signin' />
  );
};
