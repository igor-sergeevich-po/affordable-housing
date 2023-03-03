import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit/dist/";
import axios from "axios";

const initialState = {
  houses: [],
  housesImg: [],
};

export const getHouses = createAsyncThunk(
  "house/getHouses",
  async (_, { rejectedWithoutValue, dispatch }) => {
    const res = await axios.get("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
    const resImg = await axios.get("https://jsonplaceholder.typicode.com/photos");
    dispatch(setHouses(res.data));
    dispatch(setHousesImg(resImg.data));
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

export const { setHouses, setHousesImg } = houseSlice.actions;
export default houseSlice.reducer;
