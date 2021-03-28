import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorie } from '../../redux/ducks/categories'
import CircularProgress from '@material-ui/core/CircularProgress';

function Categories() {
 const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(getCategorie())
  },[dispatch])
  const categories = useSelector((state)=>state.categories.categorie)
  return (
    <div>
      {categories ? categories.map((categorie,index)=>(<p key={index}>{categorie.name}</p>)) : <CircularProgress/>}
    </div>
  )
}

export default Categories
