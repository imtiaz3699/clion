import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { loginUser, addUser, updateUser, getProfile } from "../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { MessageContext } from "./messageContext";
export const UserContextAuth = createContext();
export const UserProviderAuth = ({ children }) => {
  const messageApi = useContext(MessageContext);
  
  const [user, setUser] = useState(
    Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
  );
  const [token, setToken] = useState(
    Cookies.get("token") ? Cookies.get("token") : null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const userData = Cookies.get("user");
    const userToken = Cookies.get("token");
    if (userToken) {
      setToken(userToken);
    }
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [Cookies.get("user"), Cookies.get("token")]);
  const logout = () => {
    Cookies.remove("user", {}, { expires: -1, path: "/" });
    Cookies.remove("token", { expires: -1, path: "/" });
    setUser(null);
    setToken(null);
  };
  const loginUserMutation = useMutation(loginUser, {});
  const createUserMutation = useMutation(addUser, {});
  const updateUserMutation = useMutation(
    ({ id, data }) => updateUser(id, data),
    {
      onSuccess: async (data) => {
        const res = await getProfile();
        setUser(res?.data?.data);
        Cookies.set("user", JSON.stringify(res?.data?.data), { expires: 7 });
        messageApi.open({
          type: "success",
          content: "User updated successfully",
        });
      },
    }
  );
  const handleLogout = () => {
    Cookies.remove("user",{path:"/"});
    Cookies.remove("token",{path:"/"})
    setUser(null);
    setToken(null);
  };
  return (
    <UserContextAuth.Provider
      value={{
        setUser,
        user,
        token,
        setToken,
        loginUserMutation,
        createUserMutation,
        handleLogout,
        updateUserMutation,
        isAuthenticated,
      }}
    >
      {children}
    </UserContextAuth.Provider>
  );
};
export const useUserContext = () => useContext(UserContextAuth);
