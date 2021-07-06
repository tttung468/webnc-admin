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
  let user = store.admin_info;

  // check route has id
  if (useParams().id) {
    user = store.user_info;
  }
  console.log(user);

  if (user) {
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
              src={user.Info.avatarUrl}
              sx={{
                height: 200,
                width: 200
              }}
            />
            <Chip
              size="small"
              style={{ color: '#fff', backgroundColor: '#1976d2' }}
              label={user.Role}
            />
            <Typography color="textPrimary" gutterBottom variant="h3">
              {user.Info.userName}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {user.Info.email}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {user.Info.id}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Upload picture
          </Button>
        </CardActions>
      </Card>
    );
  }
  return null;
};

export default AccountProfile;
