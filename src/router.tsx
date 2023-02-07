import { createBrowserRouter, Outlet } from 'react-router-dom'

import Home from './pages/Home'

import ForgotPassword from './pages/auth/ForgotPassword'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'

import Main from './pages/dashboard/Main'
import Settings from './pages/dashboard/Settings'

import AuthLayout from './pages/layout/AuthLayout'
import DashboardLayout from './pages/layout/DashboardLayout'
import PageLayout from './pages/layout/PageLayout'
// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <PageLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        element: <DashboardLayout />, // Dashboard Layout
        children: [
          {
            path: '/main',
            element: <Main />,
          },
          {
            path: '/settings',
            element: <Settings />,
          },
        ],
      },
      {
        element: <AuthLayout />, // Auth Layout
        children: [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/sign-up',
            element: <SignUp />,
          },
          {
            path: '/forgot-password',
            element: <ForgotPassword />,
          },
        ],
      },
    ],
  },
])
