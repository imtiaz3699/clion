import axios from "axios";
import API from "../helpers/axiosIntercepter";
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
export const getProfile = async (data) => {
  try {
    const response = await API.get(`${import.meta.env.VITE_BASE_URL}/users/get-user`,);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

