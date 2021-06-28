import React from "react";
import {
  makeStyles,
  Fab
} from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';

function SearchButton() {
    const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(4),
      right: theme.spacing(5),
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Fab
            color="action"
            aria-label="add"
            className={classes.fab}
            // onClick={clicked}
        >
        <FilterListIcon />
        </Fab>
    </div>
  );
}

export default SearchButton
