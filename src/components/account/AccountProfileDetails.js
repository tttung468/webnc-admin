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

const AccountProfileDetails = () => {
  const { store, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const [user, setUser] = useState(store.adminInfo);

  // details state
  const [details, setDetails] = useState({
    userName: user.Info.userName,
    email: user.Info.email,
    description: user.Info.description,
    phoneNumber: user.Info.phoneNumber
  });
  const handleChangeDetails = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  };

  // switch states
  const [switchStates, setSwitchStates] = useState({
    isTwoStepConfirmation: user.Info.isTwoStepConfirmation,
    isLocked: user.Info.isLocked
  });
  const handleChangeSwitch = (event) => {
    setSwitchStates({
      ...switchStates,
      [event.target.name]: event.target.checked
    });
    console.log(`${event.target.name}: ${event.target.checked}`);
  };

  // check route has id to change user in component
  useEffect(() => {
    let effectUser = store.adminInfo;

    if (id) {
      effectUser = store.userInfo;
    }

    setUser(effectUser);
    setSwitchStates({
      isTwoStepConfirmation: effectUser.Info.isTwoStepConfirmation,
      isLocked: effectUser.Info.isLocked
    });
    setDetails({
      userName: effectUser.Info.userName,
      email: effectUser.Info.email,
      description: effectUser.Info.description,
      phoneNumber: effectUser.Info.phoneNumber
    });
  }, [store.userInfo, id]);

  // handle save user info
  const handleSave = (event) => {
    console.log('saved');
    console.log(details);
  };

  return (
    <form autoComplete="off" noValidate>
      <Card sx={{ height: '100%' }}>
        <CardHeader title="Profile" />
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
                    // eslint-disable-next-line eqeqeq
                    disabled={user.Role == 'Admin'}
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
                    // eslint-disable-next-line eqeqeq
                    disabled={user.Role == 'Admin'}
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
                type="email"
                required
                value={details.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChangeDetails}
                value={details.description ? details.description : ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                onChange={handleChangeDetails}
                type="number"
                value={details.phoneNumber ? details.phoneNumber : ''}
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
          <Button color="primary" variant="contained" onClick={handleSave}>
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
