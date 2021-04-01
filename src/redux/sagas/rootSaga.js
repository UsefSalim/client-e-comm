import { takeLatest } from "redux-saga/effects"
import { allCategories, addCategorie, deleteCategorie, updateCategorie } from "../ducks/categoriesSlice"
import { handelGetCategorie, handelAddCategorie, handelDeleteCategorie, handelUpdateCategorie } from "./handlers/categories"


export function* watcherSaga()
{
   yield takeLatest(allCategories.type, handelGetCategorie)
   yield takeLatest(addCategorie.type, handelAddCategorie)
   yield takeLatest(deleteCategorie.type, handelDeleteCategorie)
   yield takeLatest(updateCategorie.type, handelUpdateCategorie)
}

