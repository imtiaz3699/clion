import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts, fetchCategories, fetchProductImages } from "../api/api";
import Cookies from 'js-cookie';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Test User");
  // const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const products = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductImages,
    staleTime: 1000 * 60 * 60,
  });
  const jsonProducts = useQuery({
    queryKey: ["jsonProductss"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 60,
  });
  const productCategories = useQuery({
    queryKey: ["productCategories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 60,
  });
  const logout = () => {
    setUser(null);
  };
  useEffect(() => {
    const userData = Cookies.get("user"); // Retrieve user data from cookies
    if (userData) {
      setUser(JSON.parse(userData)); // Parse and set user data
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, logout, products, jsonProducts, productCategories }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
