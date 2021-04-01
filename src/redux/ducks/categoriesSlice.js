import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
  name: "categorie",
  initialState: {},
  reducers: {
    getCategorie: (state = this.initialState, action) =>
    {
      const categorie = action.payload
      return {
        ...state,
        categorie
      }
    },
    allCategories: (state = this.initialState) =>
    {
      return state
    },
    addCategorie: (state = this.initialState) =>
    {
      return state
    },
    deleteCategorie: (state = this.initialState) =>
    {
      return state
    },
    updateCategorie: (state = this.initialState) =>
    {
      return state
    },
  }

})
export const { getCategorie, addCategorie, allCategories, deleteCategorie, updateCategorie } = categoriesSlice.actions;

export default categoriesSlice.reducer;
