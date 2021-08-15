/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Switch
} from '@material-ui/core';
import AppContext from '../../appContext';
import { axiosInstance } from '../../utils';

const AccountProfileDetails = () => {
  const { store, dispatch } = useContext(AppContext);
  const { id } = useParams();

  // details state
  const [details, setDetails] = useState({
    id: store.course.id,
    name: store.course.name,
    price: store.course.price,
    discount: store.course.discount,
    shortDiscription: store.course.shortDiscription,
    detailDiscription: store.course.detailDiscription
  });

  useEffect(() => {
    setDetails({
      id: store.course.id,
      name: store.course.name,
      price: store.course.price,
      discount: store.course.discount,
      shortDiscription: store.course.shortDiscription,
      detailDiscription: store.course.detailDiscription
    });
  }, [store.course]);

  const handleChangeDetails = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  };

  // handle save edited course
  const handleSave = async (event) => {
    const data = {
      courseViewModel: {
        id: details.id,
        name: details.name,
        price: details.price,
        discount: details.discount,
        shortDiscription: details.shortDiscription,
        detailDiscription: details.detailDiscription,
        categoryId: store.course.categoryId,
        lecturerId: store.course.lecturerId,
        imageUrl: store.course.imageUrl,
        statusId: store.course.statusId
      },
      lectureViewModels: store.course.lectures
    };
    const jsonData = JSON.stringify(data);
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axiosInstance.put('/courses', jsonData, headers);
      alert('Update successfully.');
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        alert(err.response.data.errors.description);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
    }
  };

  return (
    <form autoComplete="off" noValidate>
      <Card sx={{ height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1
          }}
        >
          <CardHeader title="Profile" />
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
            size="small"
          >
            Save details
          </Button>
        </Box>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                onChange={handleChangeDetails}
                required
                value={details.price}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Discount"
                name="discount"
                onChange={handleChangeDetails}
                value={details.discount}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                onChange={handleChangeDetails}
                required
                value={details.name}
                variant="outlined"
                multiline
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Short Description"
                name="shortDiscription"
                onChange={handleChangeDetails}
                value={details.shortDiscription}
                variant="outlined"
                multiline
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Detail Description"
                name="detailDiscription"
                onChange={handleChangeDetails}
                value={details.detailDiscription}
                variant="outlined"
                multiline
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
