import {createStore,combineReducers,applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "./sagas/rootSaga"
import themeReducer from './ducks/theme'
import categoriesReducer from './ducks/categories'

const reducer = combineReducers({
  theme:themeReducer,
  categories: categoriesReducer
})

// create a saga middleware 
const sagaMiddleware = createSagaMiddleware()
// create a array of middlewares saga
const middleware = [sagaMiddleware]
const store = createStore(reducer,{}, applyMiddleware(...middleware))
///run saga watcher 
sagaMiddleware.run(watcherSaga)

export default store