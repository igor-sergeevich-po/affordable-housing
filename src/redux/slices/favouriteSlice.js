import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      let isContain = false;
      state.favourites.map((elem) => {
        if (elem.title === action.payload.title) {
          isContain = true;
        }
      });
      if (!isContain) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter((elem) => elem.title !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
