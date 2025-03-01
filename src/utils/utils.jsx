import { Outlet, Navigate } from "react-router";
import { useUserContext } from "../context/userContext";

const ProtectedLayout = () => {
  const { isAuthenticated, token } = useUserContext();
  const checkToken = token ?? "";
  console.log(token,'fasldjfhasldjfhlasdjfhlksda')
  if (!checkToken) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
