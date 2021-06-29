/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useState, useEffect } from 'react';
import { Navigate, Routes, Route, useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
import Students from './pages/Students';
import Register from './pages/Register';
import Settings from './pages/Settings';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';

const App = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const isLoggedIn = !!localStorage.webncAdmin_accessToken;
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.webncAdmin_accessToken
  );
  useEffect(() => {
    setIsLoggedIn(!!localStorage.webncAdmin_accessToken);
  }, [localStorage.webncAdmin_accessToken]);

  const routing = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route {...rest}>
//       render=
//       {() =>
//         localStorage.webncAdmin_accessToken ? (
//           children
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )
//       }
//     </Route>
//   );
// }

export default App;
