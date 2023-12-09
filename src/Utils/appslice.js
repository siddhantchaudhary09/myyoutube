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
  },
});
export const { toggleMEnu } = appslice.actions;
export default appslice.reducer;
