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

const initUser = {
  Info: {
    id: '',
    userName: '',
    email: '',
    phoneNumber: null,
    avatarUrl: '',
    accessFailedCount: 0,

    watchLists: null,
    courses: null,
    studentCourses: null,
    feedbacks: null,

    isTwoStepConfirmation: false,
    isLocked: false,
    emailConfirmed: false,
    phoneNumberConfirmed: false,
    twoFactorEnabled: false
  },
  Role: ''
};

const initialState = {
  studentsList: [],
  teachersList: [],
  adminInfo: initUser,
  userInfo: initUser
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
