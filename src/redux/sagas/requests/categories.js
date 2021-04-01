import axios from 'axios'
const URL = "https://ucefecommerceapi.herokuapp.com/api/categories"

export function requestGetCategories()
{
  return axios.request({
    method: "get",
    url: `${URL}/`,

  })
}
export function requestAddCategories(action)
{
  return axios.request({
    method: "post",
    url: `${URL}/add`,
    data: {
      ...action.payload
    }
  })
}
export function requestDeleteCategories(action)
{
  return axios.request({
    method: "delete",
    url: `${URL}/${action.payload}`,
  })
}
export function requestUpdateCategories(action)
{
  console.log(action);
  return axios.request({
    method: "put",
    url: `${URL}/${action.payload._id}`,
    data: {
      ...action.payload.data
    }
  })
}
