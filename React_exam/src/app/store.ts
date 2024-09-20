import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authReducer from "../features/authSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
