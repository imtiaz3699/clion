import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Test User');
  

  const login = (userData) => {
    setUser(userData);
  };
  const fetchProductImages = async () => {
    try {
      
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: {
          query: 'product',
          per_page: 100,
        },
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_PRODUCT_API_KEY, // Replace with your actual API key
        },
      });
      return response.data.photos;
    } catch (error) {
      console.log(error)
      
    }
  };

  const products = useQuery({
    queryKey: ['products'],
    queryFn:fetchProductImages,
    staleTime: 1000 * 60 * 60,
  }
    
  );
  console.log(products,'fadlsjfhlasdjkhflkjdsh')

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout,products }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext) ;
