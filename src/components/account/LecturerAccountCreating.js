/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Container,
  Grid
} from '@material-ui/core';
import { axiosInstance } from '../../utils';

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isOnlyLetters = (str) => {
  const letterNumber = /^[0-9a-zA-Z]+$/;
  return str.match(letterNumber) !== null;
};

const checkInvalidAccountInfo = (values) => {
  // console.log(validateEmail(values.email));
  if (validateEmail(values.email) === false) {
    return 'Error: Invalid Email.';
  }
  if (isOnlyLetters(values.username) === false) {
    return 'Error: Username contains only letters and numbers.';
  }
  if (values.password == '' || values.password != values.confirmPassword) {
    return 'Error: Invalid password';
  }

  return '';
};

const changeRoleToLecturer = async (userId) => {
  try {
    const data = {
      userId,
      roleName: 'Lecturer'
    };
    const jsonData = JSON.stringify(data);
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axiosInstance.put('/Users/ChangeRole', jsonData, headers);
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      alert(err.response.data.errors.description);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log('Error', err.message);
    }
    return false;
  }

  return true;
};

const LecturerAccountCreating = () => {
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: 'Password@123',
    confirmPassword: 'Password@123'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // handle save password
  const handleSave = (event) => {
    console.log('saved');
    console.log(values);
  };

  // handle create lecturer account
  const handleCreateAccount = async (event) => {
    // check account info is valid to create
    const isValidInfo = checkInvalidAccountInfo(values);
    if (isValidInfo !== '') {
      alert(isValidInfo);
      return;
    }

    // create account
    const data = {
      username: values.username,
      email: values.email,
      password: values.password
    };
    const jsonData = JSON.stringify(data);
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axiosInstance.post('/auth/register', jsonData, headers);
      const checkChangeRoleSuccessfully = await changeRoleToLecturer(
        res.data.results.registeredUser.id
      );
      if (checkChangeRoleSuccessfully == true) {
        alert('Create account successfully.');
      } else {
        alert('Error: cannot change role for account');
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        alert(err.response.data.errors.description);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
    }
  };

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2
          }}
        >
          <CardHeader title="Create Lecturer Account (Default Password: Password@123)" />
          <Button
            color="primary"
            variant="contained"
            onClick={handleCreateAccount}
          >
            Create Account
          </Button>
        </Box>
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                value={values.email}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                onChange={handleChange}
                value={values.username}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                fullWidth
                label="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
                type="password"
                value={values.confirmPassword}
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};

export default LecturerAccountCreating;
