/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import LecturerListResults from '../components/lecturer/LecturerListResults';
import LecturerListToolbar from '../components/lecturer/LecturerListToolbar';

const LecturerList = () => {
  return (
    <>
      <Helmet>
        <title>Lecturers | Urskyll Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <LecturerListToolbar />
          <Box sx={{ pt: 3 }}>
            <LecturerListResults />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LecturerList;
