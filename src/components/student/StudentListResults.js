/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import moment from 'moment';
// import PerfectScrollbar from 'react-perfect-scrollbar';
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

const StudentListResults = ({ ...rest }) => {
  const columns = [
    {
      id: 'id',
      label: 'ID',
      minWidth: 110
    },
    {
      id: 'userName',
      label: 'User Name',
      minWidth: 110
    },
    {
      id: 'email',
      label: 'Email',
      minWidth: 110
    }
  ];
  const [rows, setRows] = useState([]);
  const { store, dispatch } = useContext(AppContext);

  // init value for state in reducer
  useEffect(async () => {
    // get users list
    try {
      const res = await axiosInstance.get('/Users/GetStudentList');

      dispatch({
        type: 'initStudentsList',
        payload: {
          studentsList: res.data.results.students
        }
      });

      // set rows state
      const infoRows = [];
      res.data.results.students.forEach((item) => infoRows.push(item.Info));
      setRows(infoRows);
    } catch (err) {
      console.log(err);
    }
  }, []);

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
    navigate(`/app/account/${values.id}`);
  };

  const handleDelete = async (values) => {
    try {
      const res = await axiosInstance.delete(`/users/${values.id}`);
      setRows(rows.filter((item) => item.id !== values.id));
      alert(`Delete '${values.userName}' successfully`);
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
                <TableCell>Verified Email</TableCell>
                <TableCell>Blocked</TableCell>
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
                        <Chip
                          size="small"
                          style={
                            row.isTwoStepConfirmation
                              ? {
                                  color: '#fff',
                                  backgroundColor: '#1976d2'
                                }
                              : {
                                  color: '#fff',
                                  backgroundColor: '#dc004e'
                                }
                          }
                          label={row.isTwoStepConfirmation ? 'True' : 'False'}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          size="small"
                          style={
                            row.isLocked
                              ? {
                                  color: '#fff',
                                  backgroundColor: '#1976d2'
                                }
                              : {
                                  color: '#fff',
                                  backgroundColor: '#dc004e'
                                }
                          }
                          label={row.isLocked ? 'True' : 'False'}
                        />
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

// StudentListResults.propTypes = {
//   students: PropTypes.array.isRequired
// };

export default StudentListResults;
