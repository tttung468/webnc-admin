/* eslint-disable no-unused-vars */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from '../components/account/AccountProfile';
import AccountProfileDetails from '../components/account/AccountProfileDetails';
import LecturerAccountCreating from '../components/account/LecturerAccountCreating';
import AppContext from '../appContext';
import { axiosInstance } from '../utils';

const Account = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useContext(AppContext);
  let { id } = useParams();

  useEffect(async () => {
    try {
      id = id || localStorage.webncAdmin_userId;
      const res = await axiosInstance.get(`/users/${id}`);
      res.data.results.Info.role = res.data.results.Role;

      if (id) {
        dispatch({
          type: 'initUser',
          payload: {
            user: res.data.results.Info
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Account | Urskyll Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails />
            </Grid>
            {id ? null : (
              <Grid item lg={12} md={12} xs={12}>
                <LecturerAccountCreating />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
