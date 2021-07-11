/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
// import FacebookIcon from '../icons/Facebook';
// import GoogleIcon from '../icons/Google';
import { axiosInstance, parseJwt } from '../utils';
import AppContext from '../appContext';

async function getAdminInfo(dispatch) {
  try {
    const res = await axiosInstance.get(
      `/users/${localStorage.webncAdmin_userId}`
    );
    dispatch({
      type: 'init_admin_info',
      payload: {
        admin_info: res.data.results
      }
    });
  } catch (err) {
    console.log(err);
  }
}

const Login = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useContext(AppContext);

  const handleLogin = async (data) => {
    // eslint-disable-next-line no-param-reassign
    data.userName = data.email;
    const jsonData = JSON.stringify(data);
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axiosInstance.post('/auth/login', jsonData, headers);
      const obj = parseJwt(res.data.results.item1);

      if (obj.role === 'Admin') {
        localStorage.webncAdmin_userId = obj.nameid;
        localStorage.webncAdmin_accessToken = res.data.results.item1;

        // get admin info to init state in reducer
        await getAdminInfo(dispatch);

        navigate('/app/dashboard');
      } else {
        alert("You don't have permission to login.");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Urskyll Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ mb: 3 }}>
            <Typography color="textPrimary" variant="h2">
              Sign in
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Sign in on the internal platform
            </Typography>
          </Box>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(false);
              handleLogin(data);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Or Username"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                {/* <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{' '}
                  <Link component={RouterLink} to="/register" variant="h6">
                    Sign up
                  </Link>
                </Typography> */}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
