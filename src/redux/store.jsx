
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productDetailReducer from './productDetailReducer';
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add more reducers as needed
    productDetail: productDetailReducer
  },
});

export default store;
