import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
};

export const fetchAllData = createSlice({
  name: "fetchData",
  initialState,
  reducers: {
    callData(state, action) {
      state.value = action?.payload;
    },
  },
});

export const { callData } = fetchAllData.actions;

export default fetchAllData.reducer;

export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    let { data } = res;
    dispatch(callData(data));
  } catch (err) {
    console.log(err);
  }
};
