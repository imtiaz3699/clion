import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  productData: null,
};

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    handleOpenModal: (state, action) => {
      state.isModalOpen = true;
      state.productData = action.payload;
    },
    handleModalClose: (state) => {
        state.isModalOpen = false;
        state.productData = null;
    },
  },
});

export const { handleOpenModal, handleModalClose } = productDetailSlice.actions;
export default productDetailSlice.reducer;
