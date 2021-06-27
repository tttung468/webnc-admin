/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import StudentListResults from '../components/student/StudentListResults';
import StudentListToolbar from '../components/student/StudentListToolbar';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://programmingcourse.herokuapp.com/api/users')
      .then((results) => results.json())
      .then((data) => {
        console.log(data.results);
        setStudents(data.results);
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
          <StudentListToolbar />
          <Box sx={{ pt: 3 }}>
            <StudentListResults students={students} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default StudentList;
