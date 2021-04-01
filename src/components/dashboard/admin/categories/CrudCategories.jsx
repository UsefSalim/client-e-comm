import React, { useEffect, useState } from 'react'
import AddCategorie from './AddCategorie'
import UpdateCategorie from './UpdateCategorie'
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Update';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { allCategories, deleteCategorie } from '../../../../redux/ducks/categoriesSlice'
import TableauPaginate from '../../utils/TablePaginate';
import Popup from 'reactjs-popup';
import { Button, Paper } from '@material-ui/core';

function CrudCategories()
{

  const useStyles1 = makeStyles((theme) => ({
    table: {
      minWidth: 800,
    },
    button: {
      margin: theme.spacing(1),
    },
  }))
  const classes = useStyles1();
  const AddPopup = () => (
    <Popup trigger={
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<AddIcon />}
      >
        Add
              </Button>
    } nested modal>
      {close => (
        <Paper square>
          <AddCategorie close={close} dispatch={dispatch} />
        </Paper>
      )}
    </Popup>

  )
  const UpdatePopup = (category) => (

    <Popup trigger={
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<UpdateIcon />}
        size="small"
      >
        Update
    </Button>
    } nested modal>
      {close => (
        <Paper square>
          <UpdateCategorie close={close} dispatch={dispatch} category={category} />
        </Paper>
      )}
    </Popup>
  )
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categorie)
  useEffect(() =>
  {
    dispatch(allCategories())

  }, [dispatch])

  const handelDelete = (id) =>
  {
    dispatch(deleteCategorie(id))
    console.log('test');
  }
  return (
    <>
      <TableauPaginate categories={categories} Update={UpdatePopup} Add={AddPopup} handelDelete={handelDelete} />
    </>
  )
}



export default CrudCategories
