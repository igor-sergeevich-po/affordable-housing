import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit/dist/";
import axios from "axios";

const initialState = {
  houses: [],
  housesImg: [],
  isDownloaded: false,
};

export const getHouses = createAsyncThunk(
  "house/getHouses",
  async (_, { rejectedWithoutValue, dispatch }) => {
    const res = await axios.get("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
    const resImg = await axios.get("https://jsonplaceholder.typicode.com/photos");
    dispatch(setHouses(res.data));
    dispatch(setHousesImg(resImg.data));
    setTimeout(() => {
      dispatch(setStatus(true));
    }, 500);
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
    setStatus: (state, action) => {
      state.isDownloaded = action.payload;
    },
  },
  extraReducers: {
    [getHouses.fulfilled]: () => {
      console.log("fullfilled");
    },
    [getHouses.rejected]: () => {
      console.log("rejected");
    },
    [getHouses.pending]: () => {
      console.log("pending");
    },
  },
});

export const { setHouses, setHousesImg, setStatus } = houseSlice.actions;
export default houseSlice.reducer;
