/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from '../components/account/AccountProfile';
import AccountProfileDetails from '../components/account/AccountProfileDetails';

const demoData = {
  results: {
    Info: {
      id: '52dc2416-4790-4ede-9ae1-779a898bcb2d',
      userName: 'tttung468',
      email: 'tttung468@gmail.com',
      phoneNumber: null,
      avatarUrl: 'https://picsum.photos/200',
      accessFailedCount: 0,

      watchLists: null,
      courses: null,
      studentCourses: null,
      feedbacks: null,

      isTwoStepConfirmation: false,
      isLocked: false,
      emailConfirmed: false,
      phoneNumberConfirmed: false,
      twoFactorEnabled: false,
    },
    Role: 'Admin'
  }
};

const Account = () => {
  const navigate = useNavigate();
  const adminID = '52dc2416-4790-4ede-9ae1-779a898bcb2d';
  const id = useParams().id ? useParams().id : adminID;
  const [user, setUser] = useState(demoData.results);

  useEffect(() => {
    // fetch(`https://programmingcourse.herokuapp.com/api/users/${id}`)
    //   .then((response) => {
    //     if (!response.ok) throw new Error(response.status);
    //     else return response.json();
    //   })
    //   .then((data) => {
    //     setUser(data.results);
    //   })
    //   .catch((error) => {
    //     console.log(`error: ${error}`);
    //     navigate('/404');
    //   });

    setTimeout(() => {
      setUser(demoData.results);
    }, 1000);
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
              <AccountProfile user={user} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails user={user} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
