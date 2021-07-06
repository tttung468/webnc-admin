/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import StudentListResults from '../components/student/StudentListResults';
import StudentListToolbar from '../components/student/StudentListToolbar';

const StudentList = () => {
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
            <StudentListResults />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default StudentList;
