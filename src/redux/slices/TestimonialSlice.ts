// endpoint : https://furniture-api-lumoshive-academy.vercel.app/api/testimonials?page=1&limit=1
// response : {
//     "page": 1,
//     "limit": 1,
//     "totalItems": 10,
//     "totalPages": 10,
//     "testimonials": [
//         {
//             "id": 10,
//             "name": "James Thomas",
//             "message": "Not satisfied with the product quality.",
//             "title": "Customer Support Specialist",
//             "image": "https://randomuser.me/api/portraits/men/10.jpg"
//         }
//     ]
// }

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface Testimonial {
  id: number;
  name: string;
  message: string;
  title: string;
  image: string;
}
interface ApiResponse {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  testimonials: Testimonial[];
}

export const getTestimonial = createAsyncThunk(
  "testimonial/getTestimonial",
  async (page: number) => {
    try {
      const response = await axios.get<ApiResponse>(
        `https://furniture-api-lumoshive-academy.vercel.app/api/testimonials?page=${page}&limit=1`
      );
      return response.data.testimonials;
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
  testimonial: Testimonial[];
  loading: boolean;
  error: string | undefined | null;
} = {
  testimonial: [],
  loading: true,
  error: null,
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonial.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonial = action.payload;
      })
      .addCase(getTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default testimonialSlice.reducer;
