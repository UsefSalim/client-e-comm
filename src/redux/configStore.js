import {createStore,combineReducers} from 'redux'
import themeReducer from './ducks/theme'
const reducer = combineReducers({
  theme:themeReducer
})

const store = createStore(reducer)


export default store