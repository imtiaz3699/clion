import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CATEGORY } from "../api/productApi";
import { useEffect } from "react";
export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (__, { getState, rejectWithValue }) => {
    const { categoryReducer } = getState();
    if (categoryReducer.categories?.length > 0) {
      return rejectWithValue("Categories already loaded.");
    }
    try {
      const response = await GET_CATEGORY();
      return response.data;
    } catch (e) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const productCategoryReducer = createSlice({
    name:"categories",
    initialState:{
        loading:false,
        categories:[],
        categoryList:[],
        error:null,
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(getCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCategory.fulfilled, (state,action) => {
                state.loading = false;
                state.categories = action.payload;
                const cat = action.payload;
                const list = cat?.data?.map((element)=> ({
                    label:element?.category_name,
                    value:element?.id
                }))
                state.categoryList = list
        })
        .addCase(getCategory.rejected,(state,action)=> {
            state.loading = false;
            if(action.payload !== "Categories already loaded") {
                state.error = action.payload;
            }
        })
    }
})
export default productCategoryReducer.reducer