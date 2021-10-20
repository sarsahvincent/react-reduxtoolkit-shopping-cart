import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [
      
  ],
  state: null,
};

export const productSFetch = createAsyncThunk(
  "products/productSFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productSFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productSFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productSFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;
