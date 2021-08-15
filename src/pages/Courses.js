/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CoursesListResults from '../components/courses/CoursesListResults';
import CoursesListToolbar from '../components/courses/CoursesListToolbar';

const CoursesList = () => {
  return (
    <>
      <Helmet>
        <title>Courses | Urskyll Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CoursesListToolbar />
          <Box sx={{ pt: 3 }}>
            <CoursesListResults />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CoursesList;
