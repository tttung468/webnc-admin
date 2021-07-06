/* eslint-disable no-unused-vars */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from '../components/account/AccountProfile';
import AccountProfileDetails from '../components/account/AccountProfileDetails';
import AppContext from '../appContext';

const Account = () => {
  const navigate = useNavigate();
  const { store } = useContext(AppContext);
  const id = useParams().id ? useParams().id : localStorage.getItem('adminID');

  // useEffect(() => {
  //   fetch(`https://programmingcourse.herokuapp.com/api/users/${id}`)
  //     .then((response) => {
  //       if (!response.ok) throw new Error(response.status);
  //       else return response.json();
  //     })
  //     .then((data) => {
  //       dispatch({
  //         type: 'init_student_profile',
  //         payload: {
  //           students_profile: data.results
  //         }
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(`error: ${error}`);
  //       navigate('/404');
  //     });
  // }, []);

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
            {/* <Grid item lg={8} md={6} xs={12}>
                <AccountProfileDetails />
              </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
