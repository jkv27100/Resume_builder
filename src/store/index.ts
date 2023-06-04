import { configureStore } from "@reduxjs/toolkit";
import ResumeReducer from "./ResumeSlice";

export const store = configureStore({
  reducer: {
    ResumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
