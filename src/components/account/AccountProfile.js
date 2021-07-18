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

const AccountProfile = () => {
  const { store } = useContext(AppContext);
  let user = store.admin;

  // check route has id
  if (useParams().id) {
    user = store.user;
  }

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
            src={user.avatarUrl}
            sx={{
              height: 160,
              width: 160
            }}
          />
          <Chip
            size="small"
            style={{ color: '#fff', backgroundColor: '#1976d2' }}
            label={user.role}
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.userName}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {user.email}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {user.id}
          </Typography>
        </Box>
      </CardContent>
      {/* <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Upload picture
          </Button>
        </CardActions> */}
    </Card>
  );
};

export default AccountProfile;
