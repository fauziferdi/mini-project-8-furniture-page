import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/HeaderSlice";
import headerDataReducer from "./slices/DataHeaderSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    headerData: headerDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
