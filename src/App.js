import 'react-perfect-scrollbar/dist/css/styles.css';
import { useState, useEffect, useReducer } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
import AppContext from './appContext';
import reducer from './reducer';
import { axiosInstance } from './utils';

const initUser = {
  id: '',
  userName: '',
  email: '',
  phoneNumber: null,
  avatarUrl: '',

  watchLists: null,
  courses: null,
  studentCourses: null,
  feedbacks: null,

  isTwoStepConfirmation: false,
  isLocked: false,
  role: ''
};

const initialState = {
  studentsList: [],
  teachersList: [],
  admin: initUser,
  user: initUser
};

const App = () => {
  // check is login
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.webncAdmin_accessToken
  );
  useEffect(() => {
    setIsLoggedIn(!!localStorage.webncAdmin_accessToken);
  }, [localStorage.webncAdmin_accessToken]);

  // routing
  const routing = useRoutes(routes(isLoggedIn));

  // context
  const [store, dispatch] = useReducer(reducer, initialState);

  // get adminInfo
  useEffect(async () => {
    try {
      const id = localStorage.webncAdmin_userId;

      if (id) {
        const res = await axiosInstance.get(`/users/${id}`);
        res.data.results.Info.role = res.data.results.Role;

        dispatch({
          type: 'initAdmin',
          payload: {
            admin: res.data.results.Info
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContext.Provider value={{ store, dispatch }}>
        {routing}
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
