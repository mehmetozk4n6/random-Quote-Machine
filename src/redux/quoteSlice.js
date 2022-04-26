import { createSlice } from "@reduxjs/toolkit";
import quotes from "./quotes";
import colors from "../colors";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [...quotes],
    currentItem: quotes[0],
    colors: [...colors],
    currentColor: "info",
  },
  reducers: {
    // state === initialState
    getRandom: (state) => {
      state.currentItem =
        state.items[Math.floor(Math.random() * state.items.length)];
    },
    getColor: (state) => {
      state.currentColor =
        state.colors[Math.floor(Math.random() * state.colors.length)];
    },
  },
});

// for actions
export const { getRandom, getColor } = quoteSlice.actions;

export const changeColor = (state) => state.quotes.currentColor;

// for state
export default quoteSlice.reducer;
