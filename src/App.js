import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';

const App = () => {
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

export default App;
