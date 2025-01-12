import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts,fetchCategories,fetchProductImages } from "../api/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Test User");

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
  return (
    <UserContext.Provider
      value={{ user, login, logout, products, jsonProducts,productCategories }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
