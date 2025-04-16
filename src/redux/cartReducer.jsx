// src/features/cart/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_CART } from "../api/cartApi.jsx";
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (__, { getState, rejectWithValue }) => {
    const { cart } = getState();
    if (cart.items.length > 0) {
      console.log("Cart already has items, skipping API call");
      return rejectWithValue("Cart");
    }
    try {
      const repsonse = await GET_CART(cart.currentPage, cart.limit);
      return repsonse?.data?.data;
    } catch (e) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const initialState = {
  items: [],
  totalAmount: 0,
  currentPage: 1,
  limit: 10,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action, "fasdflasjld");
      state.items.push(action.payload);
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.totalAmount -= state.items[index].product.price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
        product.sub_total = product?.price * quantity; // Update sub-total
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.price * quantity, 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalAmount = action.payload.totalAmount
        state.items = action.payload?.products || [];
      })
      .addCase(getCart.rejected, (state, action) => {
        console.log("API Error:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addItem, removeItem, clearCart,updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
