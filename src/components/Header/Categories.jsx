import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Dialog,DialogContent,DialogTitle,DialogContentText} from '@material-ui/core';
import Categorie from './Categorie'

const Categories = ({ openDialog, handleClose }) =>{
  const classes = useStyles();
  return (
    <React.Fragment>
      <Dialog className={classes.dialog}
        fullWidth={true}
        maxWidth="lg"
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent align="center" className={classes.dialogContent}>
          <DialogTitle id="max-width-dialog-title" >Categories</DialogTitle>
            <DialogContentText className={classes.dialogContentText} id="alert-dialog-description">
              chi description meziana dial categories o chi blan haka a bach t3amar contenu
            </DialogContentText>
           <Categorie/>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  dialog: {
    height: "100%",
    color: "white"
  },
  dialogContent: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #83BF18",
    borderRadius: "5px"
  },
  dialogContentText:{
    color:"#83BF18",
    fontSize: "14px",
    marginTop:"-12px"
  }

}));

export default Categories ;
