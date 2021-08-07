/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Container,
  Grid,
  Autocomplete
} from '@material-ui/core';
import { axiosInstance } from '../../utils';
import AppContext from '../../appContext';

const options = ['Lập trình Web', 'Lập trình thiết bị di động'];

const SubcatEditOrAddNew = () => {
  const { store, dispatch } = useContext(AppContext);
  const [AutocompleteValue, setAutocompleteValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState({
    Id: '',
    Name: '',
    CategoryTypeId: 1,
    ImageUrl: '',
    Image: null,
    Label: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeImage = (event) => {
    setValues({ ...values, Image: event.target.files[0] });
  };

  const handleAddNew = async (event) => {
    const bodyFormData = new FormData();
    bodyFormData.append('Id', 0);
    bodyFormData.append('Name', values.Name);
    bodyFormData.append('CategoryTypeId', values.CategoryTypeId);
    bodyFormData.append('ImageUrl', '');
    bodyFormData.append('Image', values.Image);
    bodyFormData.append('Label', values.Label);

    try {
      const res = await axiosInstance.post('/Categories', bodyFormData, {
        'Content-Type': 'multipart/form-data'
      });

      alert('Add new successfully');
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        alert('Failed to add new category');
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
    }
  };

  const handleEditOrAddNew = (event) => {
    if (values.Id == '') {
      handleAddNew(event);
    } else {
      console.log('edit');
    }
  };

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2
          }}
        >
          <CardHeader title="Add a new subcategory" />
          <Button
            color="primary"
            variant="contained"
            onClick={handleAddNew}
            size="small"
            disabled={
              values.Image == null ||
              values.Name.length == 0 ||
              values.Label.length == 0
            }
          >
            Add new
          </Button>
        </Box>
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={2}>
              {/* <Avatar src={values.image} sx={{ mr: 2 }}>
                {values.image}
              </Avatar> */}
              <input
                type="file"
                id="imageInput"
                onChange={handleChangeImage}
                accept="image/*"
              />
            </Grid>
            <Grid item lg={3}>
              <Autocomplete
                value={AutocompleteValue}
                onChange={(event, newValue) => {
                  setValues({
                    ...values,
                    CategoryTypeId: newValue == options[0] ? 1 : 2
                  });
                  setAutocompleteValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => (
                  <TextField {...params} label="Category" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                label="Subcategory Name"
                name="Name"
                onChange={handleChange}
                value={values.Name}
                variant="outlined"
                required
                error={values.Name.length == 0}
              />
            </Grid>
            <Grid item lg={3}>
              <TextField
                fullWidth
                label="Label"
                name="Label"
                onChange={handleChange}
                value={values.Label}
                variant="outlined"
                required
                error={values.Label.length == 0}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};

export default SubcatEditOrAddNew;
