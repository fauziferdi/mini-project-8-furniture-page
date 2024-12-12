import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

interface HeaderData {
  experience: string;
  country: string;
  sold: string;
  variant: string;
}

export const getHeaderData = createAsyncThunk(
  "header/getHeaderData",
  async () => {
    try {
      const response = await axios.get<HeaderData>(`${API}/api/data`);
      return response.data;
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
  headerData: HeaderData;
  loading: boolean;
  error: string | undefined | null;
} = {
  headerData: {
    experience: "",
    country: "",
    sold: "",
    variant: "",
  },
  loading: false,
  error: null,
};

const headerDataSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHeaderData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHeaderData.fulfilled, (state, action) => {
        state.loading = false;
        state.headerData = action.payload;
      })
      .addCase(getHeaderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default headerDataSlice.reducer;
