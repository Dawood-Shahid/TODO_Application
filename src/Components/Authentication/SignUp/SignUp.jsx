import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import {
    useDispatch
} from 'react-redux';

import '../Authentication.css'
import { registeredUser } from '../../../redux/Authentication/AuthenticationActions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignUp(props) {

  // const user = useSelector(state => state.user)
  const dispatch = useDispatch();

   const [firstNameValid, setFirstNameValid] = useState(false);
  const [firstName, setFirstName] = useState('');
  const handleFirstName = e => {
    setFirstName(e.target.value);
    setFirstNameValid(validate(/[a-zA-Z]{2}/g, firstName));
  };

  const [lastNameValid, setLastNameValid] = useState(false);
  const [lastName, setLastName] = useState('');
  const handleLastName = e => {
    setLastName(e.target.value);
    setLastNameValid(validate(/[a-zA-Z]{2}/g, lastName));
  };

  const [emailValid, setEmailValid] = useState(false);
  const [email, setEmail] = useState('');
  const handleEmail = e => {
    setEmail(e.target.value);
    setEmailValid(validate(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/g, email));
  };

  const [password, setPassword] = useState('');
  const handlePassword = e => setPassword(e.target.value);

  const [passwordValidate, setPasswordValidate] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
    setPasswordValidate(!(e.target.value.length == password.length && checkPassword(password, e.target.value)));
  };

   const checkPassword = (password, confirmPassword) => {
    return password === confirmPassword ? true : false;
  };

  const validate = (pattern, field) => {
    let regex = new RegExp(pattern);
    if (regex.test(field)) {
      return true;
    } else {
      return false;
    }
  };

  const signUp = (e) => {
    e.preventDefault();

    if (firstName && lastName && email && password) {
      if (firstNameValid && lastNameValid && emailValid && !passwordValidate) {
        let userData = {
          firstName,
          lastName,
          email,
          password,
        }; 

        dispatch(registeredUser(userData));
  
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
      }
    }
    // else {
    //   setMessage('Please enter all fields', 'error');
    // }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={e=>signUp(e)} method='post'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={handleFirstName}
                error={firstName !== '' & !firstNameValid}
                helperText={firstName !== '' & !firstNameValid ? 'must be atleast 3 chars long' : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={handleLastName}
                error={lastName !== '' & !lastNameValid}
                helperText={lastName !== '' & !lastNameValid ? 'must be atleast 3 chars long' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleEmail}
                error={email !== '' & !emailValid}
                helperText={email !== '' & !emailValid ? 'email pattern : username@domain.com' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
                autoComplete="off"
                error={password.length > 0 && password.length < 6}
                helperText={password.length > 0 && password.length < 6 ? 'password must be atleast 6 characters long' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                error={passwordValidate}
                helperText={passwordValidate ? 'password must be same' : ''}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            <Link to='/' className = 'link'>
            <Typography
              color='primary'
              gutterBottom={ true }
              variant='subtitle2'
            >
              Already have an account? Sign in
            </Typography>
          </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp
