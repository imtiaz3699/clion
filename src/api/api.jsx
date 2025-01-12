import axios from "axios";
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