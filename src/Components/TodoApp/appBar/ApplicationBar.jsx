import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  useSelector,
  useDispatch
} from 'react-redux'

import {
  logoutUser
} from '../../../redux/authentication/AuthenticationActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ApplicationBar() {
  const classes = useStyles();
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLogedIn);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      {
        isLoggedIn  && user?
          <AppBar position="fixed">
            <Toolbar>
            <Typography variant="h6">
                {`${user.firstName} ${user.lastName}`}
            </Typography>
            <div className={classes.title}>
            </div>
            <Button color="inherit" onClick={() => dispatch(logoutUser())}>Logout</Button>
            </Toolbar>
        </AppBar> : 
                <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                  TODO APP
              </Typography>
            </Toolbar>
        </AppBar>
      }
    </div>
  )
}

export default ApplicationBar
