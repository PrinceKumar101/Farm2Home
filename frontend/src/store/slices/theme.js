import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false
  },
  reducers: {
    setThemeVariable: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});
export const { setThemeVariable } = themeSlice.actions;
export default themeSlice.reducer;
