import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit/dist/";
import axios from "axios";

const initialState = {
  houses: [],
  housesImg: [],
  isDownloaded: false,
  favourites: [],
};

export const getHouses = createAsyncThunk(
  "house/getHouses",
  async (url, { rejectedWithoutValue, dispatch }) => {
    // const url = new URL("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
    // url.searchParams.append("page", 1);
    // url.searchParams.append("limit", 2);

    const res = await axios.get(url);
    const resImg = await axios.get("https://jsonplaceholder.typicode.com/photos");
    dispatch(setHouses(res.data));
    dispatch(setHousesImg(resImg.data));
    dispatch(setStatusDownloaded(true));
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
    setStatusDownloaded: (state, action) => {
      state.isDownloaded = action.payload;
    },
    setStatusSeen: (state, action) => {
      console.log("change seen status");
      // state.houses = state.houses.filter((hous) => hous.title !== action.payload);
      state.houses = state.houses.map((hous) => {
        if (hous.title == action.payload) {
          hous.seen = true;
        }
        return hous;
      });
    },
  },
});

export const { setHouses, setHousesImg, setStatusDownloaded, setStatusSeen } =
  houseSlice.actions;
export default houseSlice.reducer;
