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
    minHeight: 380
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
      id: 'categoryType',
      label: 'Category name',
      align: 'center'
    },
    {
      id: 'countCourses',
      label: 'Courses',
      align: 'center'
    }
  ];
  const [rows, setRows] = useState([]);
  const { store, dispatch } = useContext(AppContext);

  // init value for state in reducer
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

  const handleEdit = (values) => {
    console.log('Watch Subcategories');
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
                <TableCell>Action</TableCell>
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
                      <TableCell>
                        <Button
                          aria-label="edit"
                          size="small"
                          variant="contained"
                          style={{
                            color: '#fff',
                            backgroundColor: '#1976d2'
                          }}
                          onClick={() => handleEdit(row)}
                        >
                          Edit
                        </Button>
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

// SubcategoriesListResults.propTypes = {
//   students: PropTypes.array.isRequired
// };

export default SubcategoriesListResults;
