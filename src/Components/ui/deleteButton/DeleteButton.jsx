import React from "react";
import {
  makeStyles,
  Fab
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

function DeleteButton({clicked}) {
    const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(1),
      right: theme.spacing(8),
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Fab
            color="secondary"
            aria-label="filter"
            size='small'
            className={classes.fab}
            onClick={clicked}
        >
        <DeleteIcon />
        </Fab>
    </div>
  );
}

export default DeleteButton
