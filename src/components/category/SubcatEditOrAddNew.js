/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
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

const options = ['Lập trình Web', 'Lập trình thiết bị di động'];

const SubcatEditOrAddNew = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState({
    id: '',
    name: '',
    categoryTypeId: 1,
    image: 'https://picsum.photos/200',
    label: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // handle save password
  const handleEditOrAddNew = (event) => {
    if (values.id == '') {
      console.log('add new');
    } else {
      console.log('edit');
    }
    console.log(values);
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
          <CardHeader title="Edit an existed subcategory Or Create a new subcategory" />
          <Button
            color="primary"
            variant="contained"
            onClick={handleEditOrAddNew}
            size="small"
          >
            Edit Or Create
          </Button>
        </Box>
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <TextField
                fullWidth
                label="ID (Leave empty if you want to create new)"
                name="id"
                onChange={handleChange}
                value={values.id}
                variant="outlined"
                type="number"
                required
              />
            </Grid>
            <Grid item lg={3}>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Category"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                fullWidth
                label="Subcategory Name"
                name="name"
                onChange={handleChange}
                value={values.name}
                variant="outlined"
                type="number"
                required
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
