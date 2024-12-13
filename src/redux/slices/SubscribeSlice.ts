// endpoint : https://furniture-api-lumoshive-academy.vercel.app/api/subscribe
// req body : {
//     "email": "example@example.com"
//   }
// response : {
//     "message": "Email subscribed successfully"
// }

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
interface Subscribe {
  email: string;
}
export const addSubscribe = createAsyncThunk(
  "subscribe/subscribe",
  async (subscribe: Subscribe) => {
    try {
      const response = await axios.post(`${API}/api/subscribe`, subscribe);
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
  subscribe: Subscribe;
  loading: boolean;
  error: string | undefined | null;
} = {
  subscribe: {
    email: "",
  },
  loading: false,
  error: null,
};
const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSubscribe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSubscribe.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribe = action.payload;
      })
      .addCase(addSubscribe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default subscribeSlice.reducer;
