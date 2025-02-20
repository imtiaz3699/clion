import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { loginUser,addUser, updateUser, getProfile } from '../api/authApi';
import { useMutation } from "@tanstack/react-query";
import { message } from 'antd';
import { MessageContext } from './messageContext';
// Create the context
export const UserContextAuth = createContext()
export const UserProviderAuth = ({ children }) => {
  const messageApi = useContext(MessageContext);
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
  const updateUserMutation = useMutation(({ id, data }) => updateUser(id, data),{
    onSuccess: async (data) => {
      const res = await getProfile();
      console.log(res,'fasdlfajshdlfkjasld')
      setUser(res?.data?.data);
      Cookies.set('user', JSON.stringify(res?.data?.data), { expires: 7 });
      messageApi.open({
        type: 'success',
        content: 'User updated successfully',
      });
    }
  }); 
  const handleLogout = () => {
    Cookies.remove('user');
    setUser(null);
    setToken(null);
  }
  
  return (
    <UserContextAuth.Provider value={{ setUser,user, login, logout,token,setToken,loginUserMutation,createUserMutation,handleLogout,updateUserMutation}}>
      {children}
    </UserContextAuth.Provider>
  );
};
export const useUserContext = () => useContext(UserContextAuth);