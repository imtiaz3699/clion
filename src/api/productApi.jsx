

import axios from "axios";
import Cookies from "js-cookie";
const token = JSON.parse(Cookies.get("token"));
console.log(token, "IamToken");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};


// /api/product/get-products
export const GET_PRODUCTS = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/product/get-products`,
      config
    );
    console.log(response.data, "consoleData");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
