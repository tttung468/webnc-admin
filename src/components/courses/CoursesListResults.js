/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
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
  TableRow
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
    maxHeight: 440
  }
});

function find(items, text) {
  const splittedText = text.split(' ');
  return items.filter((item) =>
    splittedText.every(
      (el) =>
        item.name.indexOf(el) > -1 ||
        item.lecturer.indexOf(el) > -1 ||
        item.status.indexOf(el) > -1 ||
        item.categoryName.indexOf(el) > -1
    )
  );
}

const CoursesListResults = ({ ...rest }) => {
  const columns = [
    {
      id: 'id',
      label: 'ID'
    },
    {
      id: 'name',
      label: 'Name'
    },
    {
      id: 'lecturer',
      label: 'Lecturer'
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100
    },
    {
      id: 'categoryName',
      label: 'Subcategory',
      minWidth: 100
    }
  ];
  const [rows, setRows] = useState([]);
  const { store, dispatch } = useContext(AppContext);

  // init value for state in reducer
  useEffect(async () => {
    // get users list
    try {
      const res = await axiosInstance.get('/courses');

      for (let i = 0; i < res.data.results.length; i++) {
        res.data.results[i].lecturer = res.data.results[i].lecturer.userName;
        res.data.results[i].status = res.data.results[i].status.name;
        res.data.results[i].categoryName = res.data.results[i].category.name;
      }

      dispatch({
        type: 'initCoursesList',
        payload: {
          coursesList: res.data.results
        }
      });

      // set rows state
      setRows(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // listen store.searchCourseText to filter array
  useEffect(() => {
    if (store.searchCourseText !== '') {
      console.log(store.searchCourseText);
      setRows(find(store.coursesList, store.searchCourseText));
    } else if (store.searchCourseText === '' && store.coursesList) {
      setRows(store.coursesList);
    }
  }, [store.searchCourseText]);

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

  const handleEdit = (values) => {
    navigate(`/app/course/${values.id}`);
  };

  const handleDelete = async (values) => {
    try {
      const res = await axiosInstance.delete(`/courses/${values.id}`);
      setRows(rows.filter((item) => item.id !== values.id));
      alert(`Delete '${values.name}' successfully`);
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
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
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

// CoursesListResults.propTypes = {
//   students: PropTypes.array.isRequired
// };

export default CoursesListResults;
