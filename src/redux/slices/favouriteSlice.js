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
  },
});

export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
