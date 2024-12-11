import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

interface HeaderData {
  title: string;
  description: string;
  banner: string;
}

export const getHeaderData = createAsyncThunk(
  "header/getHeaderData",
  async () => {
    try {
      const response = await axios.get<HeaderData>(`${API}/api/header`);
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
  dataHeader: HeaderData;
  loading: boolean;
  error: string | undefined | null;
} = {
  dataHeader: {
    title: "",
    description: "",
    banner: "",
  },
  loading: false,
  error: null,
};

const headerSlice = createSlice({
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
        state.dataHeader = action.payload;
      })
      .addCase(getHeaderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default headerSlice.reducer;
