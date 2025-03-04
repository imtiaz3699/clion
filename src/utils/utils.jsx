import { Outlet, Navigate } from "react-router";
import { useUserContext } from "../context/userContext";

const ProtectedLayout = () => {
  const { token } = useUserContext();
  const checkToken = token ?? "";
  if (!checkToken) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};

export default ProtectedLayout;

export const AuthRoutes = () => {
  const { token } = useUserContext();
  if (token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
