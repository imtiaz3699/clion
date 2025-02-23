
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productDetailReducer from './productDetailReducer';
import productReducer from './productReducer';
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add more reducers as needed
    productDetail: productDetailReducer,
    productReducer:productReducer
  },
});

export default store;
