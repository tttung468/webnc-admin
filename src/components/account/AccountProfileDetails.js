/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Switch
} from '@material-ui/core';

const AccountProfileDetails = ({ user }) => {
  const [details, setDetails] = useState({
    username: user.Info.userName,
    email: user.Info.email,
    phoneNumber: user.Info.phoneNumber,
    accessFailedCount: user.Info.accessFailedCount
  });
  const handleChange = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  };

  const [switchState, setSwitchState] = useState({
    isTwoStepConfirmation: user.Info.isTwoStepConfirmation,
    emailConfirmed: user.Info.emailConfirmed,
    phoneNumberConfirmed: user.Info.phoneNumberConfirmed,
    twoFactorEnabled: user.Info.twoFactorEnabled,
    isLocked: user.Info.isLocked
  });
  const handleChangeSwitch = (event) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked
    });
    console.log(`${event.target.name}: ${event.target.checked}`);
  };

  return (
    <form autoComplete="off" noValidate>
      <Card sx={{ height: '100%' }}>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.isTwoStepConfirmation}
                    onChange={handleChangeSwitch}
                    name="isTwoStepConfirmation"
                    color="primary"
                  />
                }
                label="Two-step Confirmation"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.emailConfirmed}
                    onChange={handleChangeSwitch}
                    name="emailConfirmed"
                    color="primary"
                  />
                }
                label="Email Confirmation"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.isLocked}
                    onChange={handleChangeSwitch}
                    name="isLocked"
                    color="primary"
                  />
                }
                label="Lock"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.phoneNumberConfirmed}
                    onChange={handleChangeSwitch}
                    name="phoneNumberConfirmed"
                    color="primary"
                  />
                }
                label="Phone Number Confirmation"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7}>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.twoFactorEnabled}
                    onChange={handleChangeSwitch}
                    name="twoFactorEnabled"
                    color="primary"
                  />
                }
                label="Two-factor Authentication"
                labelPlacement="end"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                onChange={handleChange}
                required
                value={details.username}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                type="email"
                required
                value={details.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={details.phoneNumber}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Fail Access (times)"
                name="accessFailedCount"
                onChange={handleChange}
                type="number"
                value={details.accessFailedCount}
                variant="outlined"
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
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
