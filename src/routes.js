/* eslint-disable no-unused-vars */
import { Navigate } from 'react-router-dom';
import Students from './pages/Students';
import Lecturers from './pages/Lecturers';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Courses from './pages/Courses';
import Course from './pages/Course';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';

const routes = (isLoggedIn) => [
  {
    path: 'app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'students', element: <Students /> },
      { path: 'lecturers', element: <Lecturers /> },
      { path: 'account', element: <Account /> },
      { path: 'account/:id', element: <Account /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'categories', element: <Categories /> },
      { path: 'courses', element: <Courses /> },
      { path: 'course/:id', element: <Course /> },
      { path: 'update-password', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'login',
        element: !isLoggedIn ? <Login /> : <Navigate to="/app/dashboard" />
      },
      // {
      //   path: 'register',
      //   element: !isLoggedIn ? <Register /> : <Navigate to="/app/dashboard" />
      // },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
