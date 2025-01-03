import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/HeaderSlice";
import headerDataReducer from "./slices/DataHeaderSlice";
import categoryReducer from "./slices/CategorySlice";
import productReducer from "./slices/ProductSlice";
import testimonialReducer from "./slices/TestimonialSlice";
import subscribeReducer from "./slices/SubscribeSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    headerData: headerDataReducer,
    category: categoryReducer,
    product: productReducer,
    testimonial: testimonialReducer,
    subscribe: subscribeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
