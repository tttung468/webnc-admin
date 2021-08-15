/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography
} from '@material-ui/core';
import { Grid } from 'react-feather';
import AppContext from '../../appContext';

const CourseDetails = () => {
  const { store } = useContext(AppContext);
  const { course } = store;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={course.imageUrl}
            sx={{
              height: 160,
              width: 160
            }}
          />
          <Chip
            size="small"
            style={{ color: '#fff', backgroundColor: '#1976d2' }}
            label={course.status}
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {course.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Id: {course.id}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Rating: {course.rating}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Lecturer: {course.lecturer.userName}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseDetails;
