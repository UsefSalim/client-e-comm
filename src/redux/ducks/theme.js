/* eslint-disable import/no-anonymous-default-export */
const SWITCHTHEME = "switchtheme";

export const switchtheme = () => ({
  type: SWITCHTHEME
})


const initialState = {
  theme: false
}

export const reducerTheme =  (state = initialState, action) =>
{
  switch (action.type)
  {
    case SWITCHTHEME:
      return {...state,theme: !state.theme}
    default:
      return state
  }
}
