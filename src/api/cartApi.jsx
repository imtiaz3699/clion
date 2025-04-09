import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("token") ? Cookies.get("token") : "";
console.log(token, "IamTokenfasdfasdfasdfasdfasdfas");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

// /api/product/get-products
export const GET_CART = async (page, limit, userId, productId) => {
  const params = {
    page: page,
    limit: limit,
  };
  const cleanedParams = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, value ?? ""])
  );
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/user/cart/get-cart`,
      { headers: config.headers, params: cleanedParams }
    );
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const ADD_TO_CART = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/product/create-product`,
      data,
      config
    );
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const UPDATE_CART = async (id, data) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/user/cart/update-cart/${id}`,
      data,
      config
    );
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const REMOVE_FROM_CART = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/user/cart/remove-from-cart/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const GET_CATEGORY = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/category/get-category`,
      config
    );
    console.log(response.data, "consoleData");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
