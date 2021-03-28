/* eslint-disable import/no-anonymous-default-export */
// https://ucefecommerceapi.herokuapp.com/categories

export const GET_CATEGORIE = "GET_CATEGORIE";
 const SET_CATEGORIE = "SET_CATEGORIE";

export const getCategorie = () => ({
  type: GET_CATEGORIE
})
export const setCategorie = (categorie) => ({
  type: SET_CATEGORIE,
  categorie
})


const initialState = {
  categorie: undefined
}

export default (state = initialState, action) =>
{
  switch (action.type)
  {
    case SET_CATEGORIE:
      const { categorie } = action
      return {
        ...state,
        categorie
      }
    default:
      return state;

  }
}