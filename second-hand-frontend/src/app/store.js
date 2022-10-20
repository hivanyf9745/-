import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import fetchDataReducer from "../features/reducerSlices/apiData";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
