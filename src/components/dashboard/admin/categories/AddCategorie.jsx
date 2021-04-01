import { Button, Card, FilledInput, FormControl, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import { addCategorie } from '../../../../redux/ducks/categoriesSlice'
import { useForm } from "react-hook-form";
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: "32px",
    backgroundColor: "#F7FAFB"
  },
  alert: {
    margin: "8px 0"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Schema = yup.object().shape({
  name: yup.string().min(6).required(),
})
function AddCategorie(props)
{
  const { dispatch } = props
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(Schema) });
  const onSubmit = data =>
  {

    (errors.lenght !== 0) && (
      dispatch(addCategorie({
        ...data
      }))
    ) && props.close()
  }
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {errors.name && <Alert className={classes.alert} severity="error">{errors.name.message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Categorie</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            name="name"
            inputRef={register}
            startAdornment={<InputAdornment position="start">C-</InputAdornment>}
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
          </Button>
      </form>
    </Card>
  )
}

export default AddCategorie
