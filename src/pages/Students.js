/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import StudentListResults from '../components/student/StudentListResults';
import StudentListToolbar from '../components/student/StudentListToolbar';

import AppContext from '../appContext';
import reducer from '../reducer/studentsList';

const initialState = {
  students_list: []
};

const StudentList = () => {
  const navigate = useNavigate();
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://programmingcourse.herokuapp.com/api/users')
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        dispatch({
          type: 'init_students_list',
          payload: {
            students_list: data.results
          }
        });
      })
      .catch((error) => {
        console.log(`error: ${error}`);
        navigate('/404');
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Students | Urskyll Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <AppContext.Provider value={{ store, dispatch }}>
            <StudentListToolbar />
            <Box sx={{ pt: 3 }}>
              <StudentListResults />
            </Box>
          </AppContext.Provider>
        </Container>
      </Box>
    </>
  );
};

export default StudentList;
