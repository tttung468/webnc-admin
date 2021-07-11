/* eslint-disable no-unused-vars */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from '../components/account/AccountProfile';
import AccountProfileDetails from '../components/account/AccountProfileDetails';
import AppContext from '../appContext';
import { axiosInstance } from '../utils';

const Account = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useContext(AppContext);
  const { id } = useParams();

  useEffect(async () => {
    if (id) {
      try {
        const res = await axiosInstance.get(`/users/${id}`);
        dispatch({
          type: 'init_user_info',
          payload: {
            user_info: res.data.results
          }
        });
      } catch (err) {
        console.log(err);
      }
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
          py: 3
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
