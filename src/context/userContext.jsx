import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { loginUser, addUser, updateUser, getProfile } from "../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { MessageContext } from "./messageContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
// Create the context
export const UserContextAuth = createContext();
export const UserProviderAuth = ({ children }) => {
  const messageApi = useContext(MessageContext);
  const [user, setUser] = useState(Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null);
  const [token, setToken] = useState(Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const userData = Cookies.get("user");
    const userToken = Cookies.get("token");
    if (userToken) {
      setToken(JSON.parse(userToken));
    }
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [Cookies.get("user"), Cookies.get("token")]);

  console.log(token,user,'fasd;fjashdlk')
  const logout = () => {
    Cookies.remove("user",{},{expires:-1,path:"/"});
    Cookies.set("token", "", { expires: -1, path: "/" });
    setUser(null);
    setToken(null);
  };
  console.log(token,Cookies.get('token'),'fasdlfjhasldfjkhasldkjfhasldkjf')
  const isTokenExpired = (token) => {
    if (!token) return false;
    const decodedToken = jwtDecode(token);
    return decodedToken.exp * 1000 < Date.now();
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
    Cookies.remove("user");
    setUser(null);
    setToken(null);
  };
  return (
    <UserContextAuth.Provider
      value={{
        setUser,
        user,
        logout,
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
