import axios from 'axios'
const URL =  "https://ucefecommerceapi.herokuapp.com/categories"
export function requestGetCategories (){
  return axios.request({
    method:"get",
    url: URL
  })
}

