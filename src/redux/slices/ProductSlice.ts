import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  price_after_discount: number | null;
}

interface ApiResponse {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  products: Product[];
}

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (page: number) => {
    try {
      const response = await axios.get<ApiResponse>(
        `${API}/api/products?page=${page}&limit=8`
      );
      return response.data.products;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.message);
      } else {
        console.error("Error:", error);
      }
      throw error;
    }
  }
);

const initialState: {
  product: Product[];
  loading: boolean;
  error: string | undefined | null;
} = {
  product: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        console.log(action.payload);
      })

      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
