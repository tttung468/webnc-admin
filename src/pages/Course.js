/* eslint-disable no-unused-vars */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import CourseDetails from '../components/courses/CourseDetails';
import CourseEditDetails from '../components/courses/CourseEditDetails';
import AppContext from '../appContext';
import { axiosInstance } from '../utils';

const Account = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useContext(AppContext);
  const { id } = useParams();

  useEffect(async () => {
    try {
      const res = await axiosInstance.get(`/courses/${id}`);

      if (id) {
        dispatch({
          type: 'initCourse',
          payload: {
            course: res.data.results
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
              <CourseDetails />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <CourseEditDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
