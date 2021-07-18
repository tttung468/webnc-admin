/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
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
import AppContext from '../../appContext';
import { axiosInstance } from '../../utils';

const VeryfyTwoStepConfirmation = async (email, otpCode) => {
  try {
    const data = {
      email,
      otpCode
    };
    const jsonData = JSON.stringify(data);
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axiosInstance.post(
      '/Auth/VerifyTwoStepVerification',
      jsonData,
      headers
    );
    alert('Verify two-step confirmation successfuly');
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

  return true;
};

const AccountProfileDetails = () => {
  const { store, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const user = store.admin;

  // details state
  const [details, setDetails] = useState({
    id: user.id,
    otpCode: user.otpCode,
    role: user.role,
    email: user.email,
    userName: user.userName,
    description: user.description,
    avatarUrl: user.avatarUrl
  });
  const handleChangeDetails = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  };

  // switch states
  const [switchStates, setSwitchStates] = useState({
    isTwoStepConfirmation: user.isTwoStepConfirmation,
    isLocked: user.isLocked
  });
  const handleChangeSwitch = (event) => {
    if (event.target.name === 'isTwoStepConfirmation') {
      const checkVerifySuccessfully = VeryfyTwoStepConfirmation(
        details.email,
        details.otpCode
      );

      if (checkVerifySuccessfully === false) {
        return;
      }
    } else if (event.target.name === 'isLocked') {
      console.log(event.target.name);
    }

    setSwitchStates({
      ...switchStates,
      [event.target.name]: event.target.checked
    });
  };

  // check route has id to change user in component
  useEffect(() => {
    let effectUser = store.admin;

    if (id) {
      effectUser = store.user;
    }

    // setUser(effectUser);
    setSwitchStates({
      isTwoStepConfirmation: effectUser.isTwoStepConfirmation,
      isLocked: effectUser.isLocked
    });
    setDetails({
      id: effectUser.id,
      otpCode: effectUser.otpCode,
      role: effectUser.role,
      email: effectUser.email,
      userName: effectUser.userName,
      description: effectUser.description,
      avatarUrl: effectUser.avatarUrl
    });
  }, [store.user, store.admin, id]);

  // handle save user info
  const handleSave = async (event) => {
    const data = {
      userId: details.id,
      newUserName: details.userName,
      newAvatarUrl: details.avatarUrl,
      newEmail: details.email,
      description: details.description
    };
    const jsonData = JSON.stringify(data);
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axiosInstance.put('/users', jsonData, headers);
      res.data.results.role = details.role;
      alert('Update successfully.');

      if (id) {
        dispatch({
          type: 'initUser',
          payload: {
            user: res.data.results
          }
        });
      } else {
        dispatch({
          type: 'initAdmin',
          payload: {
            admin: res.data.results
          }
        });
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
      <Card sx={{ height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1
          }}
        >
          <CardHeader title="Profile" />
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
            size="small"
          >
            Save details
          </Button>
        </Box>
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchStates.isTwoStepConfirmation}
                    onChange={handleChangeSwitch}
                    name="isTwoStepConfirmation"
                    color="primary"
                    disabled={switchStates.isTwoStepConfirmation}
                  />
                }
                label="Two-step Confirmation"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchStates.isLocked}
                    onChange={handleChangeSwitch}
                    name="isLocked"
                    color="primary"
                    disabled={!id}
                  />
                }
                label="Lock"
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
                name="userName"
                onChange={handleChangeDetails}
                required
                value={details.userName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChangeDetails}
                required
                value={details.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChangeDetails}
                value={details.description != null ? details.description : ''}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
