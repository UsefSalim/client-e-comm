import { call, put } from 'redux-saga/effects';
import { requestGetCategories } from "../requests/categories"
import { setCategorie } from '../../ducks/categories'
export function* handelGetCategorie(action)
{
  try
  {
    const response = yield call(requestGetCategories)
    const { data } = response
    yield put(setCategorie(data))
  } catch (error)
  {
    console.log(error);
  }
}

