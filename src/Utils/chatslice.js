import { createSlice } from "@reduxjs/toolkit";

const chatslice = createSlice({
  name: "chatslice",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessage: (state, action) => {
      state.messages.unshift(action.payload);
    },
  },
});
export default chatslice.reducer;
export const { addmessage } = chatslice.actions;
