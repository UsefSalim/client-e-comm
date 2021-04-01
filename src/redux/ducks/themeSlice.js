import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: false
  },
  reducers: {
    switchtheme: (state = this.initialState) =>
    {
      state.value = !state.value
    }
  }
})

export const { switchtheme } = themeSlice.actions;

export default themeSlice.reducer;