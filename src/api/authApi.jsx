import axios from "axios";
import API from "../helpers/axiosIntercepter";
import Cookies from "js-cookie";
const token = JSON.parse(Cookies.get("token"));
console.log(token, "IamToken");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
export const loginUser = async (data) => {
  console.log(data, "fadslfhasdlkfja");
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      data
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const addUser = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/create-user`,
      data
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const updateUser = async (id,data) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/users/update-user/${id}`,
      data,
      config
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const getProfile = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/get-user`,
      config
    );
    console.log(response.data, "consoleData");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
