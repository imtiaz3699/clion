import axios from "axios";
import API from "../helpers/axiosIntercepter";
import Cookies from "js-cookie";
const token = Cookies.get("token") ? Cookies.get("token") : null;
const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
export const fetchProductImages = async () => {
  try {
    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: {
        query: "product",
        per_page: 100,
      },
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_PRODUCT_API_KEY, // Replace with your actual API key
      },
    });
    return response.data.photos;
  } catch (error) {
    console.log(error);
  }
};
export const fetchProducts = async () => {
  const response = await axios.get(
    "https://dummyjson.com/products/category/smartphones"
  );
  return response.data;
};
export const fetchCategories = async () => {
  const response = await axios.get(
    "https://dummyjson.com/products/category-list"
  );
  return response.data;
};

export const getCategories = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/category/get-category`
    );
    return response;
  } catch (error) {
    console.log(error, "error");
  }
};
export const getBanner = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/banner/get-banner`
    );
    return response;
  } catch (error) {
    console.log(error, "error");
  }
};

export const getProductsByCategory = async (page ="", limit="", categoryId="",search="") => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/product/get-products?page=${page}&limit=${limit}&categoryId=${categoryId}&search=${search}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
