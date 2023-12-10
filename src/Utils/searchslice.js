import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addcache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchslice.reducer;
export const { addcache } = searchslice.actions;
