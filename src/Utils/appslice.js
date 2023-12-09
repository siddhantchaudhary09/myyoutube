import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "app",
  initialState: {
    ismenuopen: true,
  },
  reducers: {
    toggleMEnu: (state) => {
      state.ismenuopen = !state.ismenuopen;
    },
    closeMenu: (state) => {
      state.ismenuopen = false;
    },
  },
});
export const { toggleMEnu, closeMenu } = appslice.actions;
export default appslice.reducer;
