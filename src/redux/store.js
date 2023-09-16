import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./slices/favouriteSlice";
import houseSlice from "./slices/houseSlice";
import popularSlice from "./slices/popularSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    house: houseSlice,
    favourite: favouriteSlice,
    popular: popularSlice,
  },
});
