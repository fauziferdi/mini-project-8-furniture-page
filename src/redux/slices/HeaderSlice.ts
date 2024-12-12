import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

interface Header {
  title: string;
  description: string;
  banner: string;
}

export const getHeader = createAsyncThunk("header/getHeader", async () => {
  try {
    const response = await axios.get<Header>(`${API}/api/header`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Error:", error);
    }
    throw error;
  }
});

const initialState: {
  header: Header;
  loading: boolean;
  error: string | undefined | null;
} = {
  header: {
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
      .addCase(getHeader.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHeader.fulfilled, (state, action) => {
        state.loading = false;
        state.header = action.payload;
      })
      .addCase(getHeader.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default headerSlice.reducer;
