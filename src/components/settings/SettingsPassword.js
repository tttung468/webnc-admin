/* eslint-disable operator-linebreak */
/* eslint-disable no-alert */
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

const checkInvalidAccountInfo = (values) => {
  if (values.id === '') {
    return 'Error: Id cannot be empty';
  }
  if (values.password === '') {
    return 'Error: Password cannot be empty';
  }
  if (
    values.newPassword === '' ||
    values.newPassword !== values.confirmPassword
  ) {
    return 'Error: Invalid password';
  }

  return '';
};

const SettingsPassword = () => {
  const [values, setValues] = useState({
    id: '',
    password: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // handle save password
  const handleSave = async (event) => {
    // check id and password are valid to change
    const isValidInfo = checkInvalidAccountInfo(values);
    if (isValidInfo !== '') {
      alert(isValidInfo);
      return;
    }

    // change password
    try {
      const data = {
        userId: values.id,
        oldPassword: values.password,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword
      };
      const jsonData = JSON.stringify(data);
      const headers = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const res = await axiosInstance.post(
        '/Auth/ChangePassword',
        jsonData,
        headers
      );
      alert('Change password successfully.');
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        // alert(err.response.data.errors.description);
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
        <CardHeader title="Update Password" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <TextField
                fullWidth
                label="User ID"
                name="id"
                onChange={handleChange}
                type="text"
                value={values.id}
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
                label="New Password"
                name="newPassword"
                onChange={handleChange}
                type="password"
                value={values.newPassword}
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained" onClick={handleSave}>
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
