/* eslint-disable object-curly-newline */
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const navigate = useNavigate();

  const hanldeClickLogout = () => {
    delete localStorage.webncAdmin_userId;
    delete localStorage.webncAdmin_accessToken;
    navigate('/login');
  };

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box display={{ xs: 'none', lg: 'block' }}>
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={hanldeClickLogout}>
              <InputIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box display={{ lg: 'none' }}>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
