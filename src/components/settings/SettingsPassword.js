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
  const handleSave = (event) => {
    console.log('saved');
    console.log(values);
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
          {/* <CardContent>
          <TextField
            fullWidth
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent> */}
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
