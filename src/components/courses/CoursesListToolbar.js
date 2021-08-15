/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useState, useContext, useEffect } from 'react';
import AppContext from '../../appContext';

const CoursesListToolbar = (props) => {
  const { store, dispatch } = useContext(AppContext);
  const [searchCourseText, setSearchCourseText] = useState('');

  const handleChange = (event) => {
    setSearchCourseText(event.target.value);
    dispatch({
      type: 'initSearchCourseText',
      payload: {
        searchCourseText: event.target.value
      }
    });
  };

  return (
    <Box {...props}>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search course"
                variant="outlined"
                onChange={handleChange}
                value={searchCourseText}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CoursesListToolbar;
