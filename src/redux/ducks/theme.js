/* eslint-disable import/no-anonymous-default-export */
const SWITCHTHEME = "switchtheme";
// const LIGHTTHEME = "LIGHTtheme";

export const switchtheme = () => ({
  type: SWITCHTHEME
})

// export const lightTheme = () => ({
//   type: SWITCHTHEME
// })


const initialState = {
  theme: false
}

export default (state = initialState, action) =>
{
  switch (action.type)
  {
    case SWITCHTHEME:
      return {...state,theme: !state.theme}
    default:
      return state
  }
}
