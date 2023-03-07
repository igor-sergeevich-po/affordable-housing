import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit/dist/";
import axios from "axios";

const initialState = {
  houses: [],
  housesImg: [],
  isDownloaded: false,
  currentPage: 1,
};

export const getHouses = createAsyncThunk(
  "house/getHouses",
  async (url, { rejectedWithoutValue, dispatch }) => {
    // const url = new URL("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
    // url.searchParams.append("page", 1);
    // url.searchParams.append("limit", 2);

    const res = await axios.get(url);
    // const resImg = await axios.get("https://jsonplaceholder.typicode.com/photos");

    const resUnsplash = await axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=NcMjHTa__4twlLaP28avVF_ki52TgJiv0-y9-1iZvXQ&count=24&query=house"
      )

      .catch((err) => console.log(err));

    dispatch(setHouses(res.data));
    dispatch(setHousesUnsplash(resUnsplash.data));
    dispatch(setStatusDownloaded(true));
    // dispatch(setHousesImg(resImg.data));
  }
);

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    setHouses: (state, action) => {
      state.houses.push(...action.payload);
    },
    setHousesImg: (state, action) => {
      state.housesImg.push(...action.payload);
    },
    setHousesUnsplash: (state, action) => {
      state.housesImg.push(...action.payload);
    },
    setStatusDownloaded: (state, action) => {
      state.isDownloaded = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setStatusSeen: (state, action) => {
      state.houses = state.houses.map((hous) => {
        if (hous.title === action.payload) {
          hous.seen = true;
        }
        return hous;
      });
    },
    setStausFavourites: (state, action) => {
      state.houses = state.houses.map((hous) => {
        if (hous.title === action.payload) {
          hous.isFavourites = !hous.isFavourites;
        }
        return hous;
      });
    },
  },
});

export const {
  setHouses,
  setHousesImg,
  setHousesUnsplash,
  setStatusDownloaded,
  setStatusSeen,
  setCurrentPage,
  setStausFavourites,
} = houseSlice.actions;
export default houseSlice.reducer;
