/* eslint-disable react/button-has-type */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import moment from 'moment';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { axiosInstance } from '../../utils';
import AppContext from '../../appContext';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    // minHeight: 380
  }
});

const SubcategoriesListResults = ({ ...rest }) => {
  const columns = [
    {
      id: 'id',
      label: 'ID'
    },
    {
      id: 'name',
      label: 'Subcategory Name'
    },
    {
      id: 'label',
      label: 'Label',
      align: 'center'
    },
    {
      id: 'courseNumber',
      label: 'Courses',
      align: 'center'
    }
  ];
  const [rows, setRows] = useState([]);
  const { store, dispatch } = useContext(AppContext);

  useEffect(async () => {
    // set rows state
    setRows(store.subcategoriesList);
  }, [store.subcategoriesList]);

  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // delete subcategory
  const handleDelete = async (values) => {
    if (values.courseNumber === 0) {
      try {
        await axiosInstance.delete(`/Categories/${values.id}`);

        alert('Delete successfully');
        // update ui with new subcategories list
        dispatch({
          type: 'initSubcategoriesList',
          payload: {
            subcategoriesList: store.subcategoriesList.filter(
              (item) => item.id !== values.id
            )
          }
        });
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          // alert(err.response.data.errors.description);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log('Error', err.message);
        }
      }
    } else {
      alert('Cannot delete a subcategory that have courses');
    }
  };

  // edit subcategory
  const handleEdit = (value) => {
    dispatch({
      type: 'initEditSubcategory',
      payload: {
        editSubcategory: value
      }
    });
  };

  return (
    <Card {...rest}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            {rows ? (
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell key={columns[0].id} align={columns[0].align}>
                        {row[columns[0].id]}
                      </TableCell>
                      <TableCell key={columns[1].id} align={columns[1].align}>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Avatar src={row.imageUrl} sx={{ mr: 2 }}>
                            {row.imageUrl}
                          </Avatar>
                          <Typography color="textPrimary" variant="body1">
                            {row[columns[1].id]}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell key={columns[2].id} align={columns[2].align}>
                        {row[columns[2].id]}
                      </TableCell>
                      <TableCell key={columns[3].id} align={columns[3].align}>
                        {row[columns[3].id]}
                      </TableCell>
                      <TableCell align="center">
                        <Container>
                          <Grid container spacing={0.1}>
                            <Grid item xs={6}>
                              <Button
                                aria-label="edit"
                                size="small"
                                variant="contained"
                                style={{
                                  color: '#fff',
                                  backgroundColor: '#1976d2'
                                }}
                                startIcon={<EditIcon />}
                                onClick={() => handleEdit(row)}
                              >
                                Edit
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <Button
                                aria-label="delete"
                                size="small"
                                variant="contained"
                                style={{
                                  color: '#fff',
                                  backgroundColor: '#dc004e'
                                }}
                                startIcon={<DeleteIcon />}
                                onClick={() => handleDelete(row)}
                              >
                                Delete
                              </Button>
                            </Grid>
                          </Grid>
                        </Container>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            ) : null}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Card>
  );
};

export default SubcategoriesListResults;
