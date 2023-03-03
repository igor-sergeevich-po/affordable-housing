import { configureStore } from "@reduxjs/toolkit";
import houseSlice from "./slices/houseSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    house: houseSlice,
  },
});
