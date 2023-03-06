// React Router
import { createBrowserRouter } from 'react-router-dom'

// Routes
import Root from './Root'
import Home from './Home'
import Error from './Error'

// Create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        id: 'home',
        index: true,
        element: <Home />,
      },
    ],
  },
])

// Export the router
export default router
