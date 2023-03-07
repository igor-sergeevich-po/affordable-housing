import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  popularHouses: [],
  popularHousesImg: [],
  currentPage: 1,
};

export const getPopular = createAsyncThunk(
  "popular/getPopular",
  async (_, { rejectWithoutValue, dispatch }) => {
    const url = new URL("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
    url.searchParams.append("page", 9);
    url.searchParams.append("limit", 5);
    const housesDescription = await axios.get(url);

    const housesImg = await axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=NcMjHTa__4twlLaP28avVF_ki52TgJiv0-y9-1iZvXQ&count=20&query=house"
      )
      .catch((err) => console.log(err));

    dispatch(setPopularHouses(housesDescription.data));
    dispatch(setPopularHousesImg(housesImg.data));
  }
);

export const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setPopularHouses: (state, action) => {
      state.popularHouses.push(...action.payload);
    },
    setPopularHousesImg: (state, action) => {
      state.popularHousesImg = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPopularHouses, setPopularHousesImg, setCurrentPage } =
  popularSlice.actions;
export default popularSlice.reducer;
