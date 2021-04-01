import { call, put } from 'redux-saga/effects';
import { requestGetCategories, requestAddCategories, requestDeleteCategories, requestUpdateCategories } from "../requests/categories"
import { getCategorie, allCategories } from '../../ducks/categoriesSlice'

export function* handelGetCategorie(action)
{
  try
  {
    const response = yield call(requestGetCategories)
    const { data } = response
    yield put(getCategorie(data))
  } catch (error)
  {
    console.log(error);
  }
}
export function* handelAddCategorie(action)
{
  try
  {
    yield call(requestAddCategories, action)
    yield put(allCategories())
  } catch (error)
  {
    console.log(error);
  }
}
export function* handelDeleteCategorie(action)
{
  try
  {
    yield call(requestDeleteCategories, action)
    yield put(allCategories())
  } catch (error)
  {
    console.log(error);
  }
}
export function* handelUpdateCategorie(action)
{
  try
  {
    yield call(requestUpdateCategories, action)
    yield put(allCategories())
  } catch (error)
  {
    console.log(error);
  }
}
