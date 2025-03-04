// src/features/cart/cartSlice.js
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {GET_CART} from '../api/cartApi.jsx'
export const getCart = createAsyncThunk("/cart/getCart",
  async (__,{getState,rejectWithValue}) => {
    const {cart}  = getState();
    if(cart.items.length > 0) {
      return rejectWithValue("Cart")
    }
    try {
      const repsonse = await GET_CART(cart.currentPage,cart.limit);
      return repsonse?.data?.data
    } catch (e) {
      return rejectWithValue(error.response?.data  || "Something went wrong")
    } 
  }
)
const initialState = {
  items: [],
  totalAmount: 0,
  currentPage:1,
  limit:10,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action,'fasdflasjld')
      state.items.push(action.payload);
      // state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.totalAmount -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
