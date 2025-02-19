import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { loginUser,addUser } from '../api/authApi';
import { useMutation } from "@tanstack/react-query";

// Create the context
export const UserContextAuth = createContext()
export const UserProviderAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token,setToken] = useState(null);
  useEffect(() => {
    const userData = Cookies.get('user');
    const userToken = Cookies.get('token');
    if(userToken) {
      setToken(JSON.parse(userToken));
    }
    if (userData) {
      setUser(JSON.parse(userData)); 
    }
  }, [Cookies.get('user'),Cookies.get('token')]);  
  const login = (userData) => {
    Cookies.set('user', JSON.stringify(userData), { expires: 7 });
    setUser(userData);
  };
  const logout = () => {
    Cookies.remove('user');
    setUser(null);
  };
 
  const loginUserMutation = useMutation(loginUser,{})
  const createUserMutation = useMutation(addUser,{}) 
  const handleLogout = () => {
    Cookies.remove('user');
    setUser(null);
    setToken(null);
  }
  return (
    <UserContextAuth.Provider value={{ setUser,user, login, logout,token,setToken,loginUserMutation,createUserMutation,handleLogout}}>
      {children}
    </UserContextAuth.Provider>
  );
};
export const useUserContext = () => useContext(UserContextAuth);