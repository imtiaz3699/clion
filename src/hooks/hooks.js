import { useContext } from "react";
import { UserContext } from "../context/context"; // Adjust the path if needed

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
export default useUser;