import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

interface Category {
  title: string;
  image: string;
}

interface ApiResponse {
  category: Category[];
}

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async () => {
    try {
      const response = await axios.get<ApiResponse>(`${API}/api/category`);
      return response.data.category;
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
  category: Category[];
  loading: boolean;
  error: string | undefined | null;
} = {
  category: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
        console.log(action.payload);
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
