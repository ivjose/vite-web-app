import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
