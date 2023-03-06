// React Router
import router from 'router'
import { RouterProvider } from 'react-router-dom'

// Styles
import './App.scss'

// Application
const App = () => {
  return (
    <main className="site-wrapper">
      <RouterProvider router={router} />
    </main>
  )
}

// Export Application
export default App
