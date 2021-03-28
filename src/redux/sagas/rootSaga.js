import { takeLatest } from "redux-saga/effects"
import { GET_CATEGORIE } from "../ducks/categories"
import { handelGetCategorie } from "./handlers/categories"


export function* watcherSaga()
{
   yield takeLatest(GET_CATEGORIE, handelGetCategorie)
}



