import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_PRODUCTS } from "../api/productApi";
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { getState, rejectWithValue }) => {
    const { productReducer } = getState();
    if (productReducer.products.length > 0) {
      return rejectWithValue("Products already loaded");
    }
    try {
      const response = await GET_PRODUCTS(productReducer.currentPage,productReducer.limit);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const productReducer = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: null,
    currentPage:1,
    limit:100,
  },
  reducers: {
    setCurrentPage:(state,action) => {
      state.currentPage = action.payload;
    },
    setLimit:(state,action) => {
      state.limit = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        if (action.payload !== "Products already loaded") {
          state.error = action.payload;
        }
      });
  },
});

export const {setCurrentPage,setLimit} = productReducer.actions;
export default productReducer.reducer;
