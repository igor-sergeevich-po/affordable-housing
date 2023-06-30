import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleChangeTheme: (state, action) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleChangeTheme } = themeSlice.actions;
export default themeSlice.reducer;
