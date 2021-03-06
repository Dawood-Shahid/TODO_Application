import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import '../Authentication.css'
import {
  loginUser,
  getUserData
} from '../../../redux/authentication/AuthenticationActions'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn(props) {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLogedIn);

  useEffect(() => {
    dispatch(getUserData());
    if (isLoggedIn) {
      props.history.replace('/todo-app');
    }
  }, [isLoggedIn, props.history]);

    const validate = (pattern, field) => {
      let regex = new RegExp(pattern);
      if (regex.test(field)) {
        return true;
      } else {
        return false;
      }
    };

    const [emailValid, setEmailValid] = useState(false);
    const [email, setEmail] = useState('');
    const handleEmail = e => {
        setEmail(e.target.value);
        setEmailValid(validate(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/g, e.target.value));
    };

    const [password, setPassword] = useState('');
    const handlePassword = e => setPassword(e.target.value);

    const classes = useStyles();

    const login = (e) => {
    e.preventDefault();

    if (emailValid && password.length > 5) {
      let data = {
        email: email,
        password: password
      };

        // console.log(data)
      dispatch(loginUser(data));
    //   userLogin(data);

      setEmail('');
      setPassword('');
    }
    // else {
    //   setMessage('Please enter all fields', 'error');
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => login(e)} method='post'>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleEmail}
            error={email !== '' & !emailValid}
            helperText={email !== '' & !emailValid ? 'email pattern : username@domain.com' : ''}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            error={password.length > 0 && password.length < 6}
            helperText={password.length > 0 && password.length < 6 ? 'password must be atleast 6 characters long' : ''}
            autoComplete="current-password"
          />
          {/* <Link to='/todo-app' className='link'> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
            </Button>
            {/* </Link> */}
        <Grid  container justify="flex-end">
            <Grid item>
              <Link to='/sign-up' className = 'link'>
            <Typography
              color='primary'
              gutterBottom={ true }
              variant='subtitle2'
            >
              Don't have an account? Sign Up
            </Typography>
          </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignIn
