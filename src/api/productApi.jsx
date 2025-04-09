import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("token") ? Cookies.get("token") : "";
console.log(token, "IamToken");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

// /api/product/get-products
export const GET_PRODUCTS = async (page, limit, userId, productId) => {
  console.log(productId, "fadlfjhasldkfjhaslkdj");
  const params = {
    page: page,
    limit: limit,
    productId: productId,
    userId: userId,
  };
  const cleanedParams = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, value ?? ""])
  );
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/product/get-products`,
      { params: cleanedParams },
      config
    );
    console.log(response.data, "consoleData");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const ADD_PRODUCT = async (data) => {
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
export const DELETE_PRODUCT = async (id, data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/product/delete-products/${id}`,
      config
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
